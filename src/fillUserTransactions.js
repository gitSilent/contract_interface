import * as vars from "./variables.js"
import { fillReceiveTransaction } from "./fillReceiveTransaction.js";
import { showReceiveTransaction } from "./hideShowElements.js";

export function fillUserTransactions(arrTransacts,curUser,web3){
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
            }else{
                let td = document.createElement("td");
                tr.append(td);

            }
         

          tr.style.backgroundColor = "#cef5d6";
        } else if (el.senderAddress == curUser) {
            tr.style.backgroundColor = "#f4f5ce";
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