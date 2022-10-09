import * as vars from "./variables.js"

export function fillAllTransactions(arrTransacts,curUser,web3){
    vars.tableBodyAllTransactions.innerHTML = "";
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
                  <p class="tr-sum">${web3.utils.fromWei(el.transactionSum)} eth</p>
                </td>
                <td>
                  <p class="tr-status">${el.activeTransaction}</p>
                </td>
                
        `
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

         vars.tableBodyAllTransactions.append(tr);


    });
}