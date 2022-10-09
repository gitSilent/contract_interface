import * as vars from "./variables.js"; // импорт констант с querySelector

export function fillReceiveTransaction(arrTransacts){
    vars.transactionField.innerHTML = "";
    // console.log(event.target.closest('tr').querySelector('.id-tr').textContent)
    let gotIdTransaction = event.target.closest('tr').querySelector('.id-tr').textContent;
    console.log(gotIdTransaction);
    console.log(arrTransacts)

    console.log(` receiver  address of transaction ${arrTransacts[gotIdTransaction].receiverAddress}`)


    // let div = document.createElement('div');
    // div.className = "transaction-field";
    // vars.transactionField
    vars.transactionField.innerHTML = `
    <h2>Транзакция №${gotIdTransaction}</h2>
      <p class="field-receiver">Получатель: ${arrTransacts[gotIdTransaction].receiverAddress}</p>
      <p class="field-sender">Отправитель: ${arrTransacts[gotIdTransaction].senderAddress}</p>
      <p class="field-sum">Сумма: ${arrTransacts[gotIdTransaction].transactionSum}</p>
      <p class="field-active-status">Статус активности: ${arrTransacts[gotIdTransaction].activeTransaction}</p>
      <p class="field-sended">Деньги отправлены: ${arrTransacts[gotIdTransaction].moneyWasSended}</p>
      <p class="field-qtyAttempts">Осталось попыток подтверждения: ${arrTransacts[gotIdTransaction].attemptsQty}</p>
      <p class="field-safety-status">Безопасный перевод (вкл/выкл): ${arrTransacts[gotIdTransaction].safetyTransactionStatus}</p>
      <p class="field-confirmedByAdmin-status">Подтверждено администратором: ${arrTransacts[gotIdTransaction].confirmedByAdmin}</p>
      <p class="field-desc">Описание: ${arrTransacts[gotIdTransaction].transactionDescription}</p>
      <input type="text" class="input-recieve-codeWord" placeholder="Введите кодовое слово">
      
    `
    // vars.modalRecieveTransaction.append(div);
}