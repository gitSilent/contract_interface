export function cancelTransactionEvent(web3,contractInstance,curUser){
    if(confirm("Вы уверены, что хотите отменить транзакцию?")){
        let gottenId = event.target.closest(".transact-item").querySelector(".id-tr").textContent;
    
  
        console.log(gottenId);
    
        contractInstance.methods.cancelTransaction(gottenId).send({from: curUser})
        .then((value)=>{
            console.log(value)
            location.reload()
        })
    
    
    }
    

}