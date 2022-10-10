import * as vars from "./variables.js"
import { fillReceiveTransaction } from "./fillReceiveTransaction.js";
import { showReceiveTransaction } from "./hideShowElements.js";
import {cancelTransactionEvent} from "./cancelTransactionEvent.js"


export function fillUserTransactions(arrTransacts,curUser,web3,contractInstance){
    vars.tableBodyUserTransactions.innerHTML = "";
    console.log(arrTransacts)
    arrTransacts.forEach((el,index) => {

        let tr = document.createElement('tr');
        tr.className = "transact-item";
        tr.innerHTML = `
            <td>
                <p class="id-tr">${index}</p>
            </td>
            <td>
                <div class="sender-receiver">
                <p class="sender">Отправитель: ${el.senderAddress}</p>
                <p class="reciever">Получатель: ${el.receiverAddress}</p>
                </div>
            </td>
            <td>
                <p class="tr-sum">${web3.utils.fromWei(el.transactionSum)}</p>
            </td>
            <td>
                <p class="tr-status">${el.activeTransaction}</p>
            </td>
           
                
        `
        if (el.receiverAddress == curUser) {
            if(el.activeTransaction){
                let td = document.createElement("td");
                td.innerHTML = `
                        <button class="tr-btn-accept btn-usual">
                            Принять платеж
                        </button>
                    `;
                    tr.append(td)

                    td.querySelector('button').onclick = ()=>{
                        fillReceiveTransaction(arrTransacts)
                        showReceiveTransaction();
                    };
                tr.style.backgroundColor = "#cef5d6";

            }
            
            else if(!el.activeTransaction && el.moneyWasSended == false){
                let td = document.createElement("td");
                tr.append(td);
                tr.style.backgroundColor = "#edc2c2";


            } else {
                let td = document.createElement("td");
                tr.append(td);
                tr.style.backgroundColor = "#cef5d6";

            }
         

        } else if (el.senderAddress == curUser && el.activeTransaction == true) {
            tr.style.backgroundColor = "#f4f5ce";
            let td = document.createElement("td");
                td.innerHTML = `
                        <button class="tr-btn-cancel btn-usual btn-cancel">
                            Отменить платеж
                        </button>
                    `;
                    tr.append(td)

                    td.querySelector('button').onclick = ()=>{
                        cancelTransactionEvent(web3,contractInstance,curUser)
                    };
        }
        else{
            tr.style.backgroundColor = "#edc2c2";
            let td = document.createElement("td");
            tr.append(td);

        }
        //  if (el.receiverAddress == curUser) {
        //    let td = document.createElement("td");
        //    tr.style.backgroundColor = '#cef5d6'
        //    tr.append(td)

        //    td.innerHTML = `
        //         <button class="tr-btn-accept btn-usual">
        //         Принять платеж
        //         </button>
        //     `;
        //  }
        if((el.receiverAddress == curUser || el.senderAddress == curUser) ){
            vars.tableBodyUserTransactions.append(tr);
        }


    });
}