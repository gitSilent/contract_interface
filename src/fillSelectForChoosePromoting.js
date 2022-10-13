export async function fillSelectForChoosePromoting(select, arr, contractInstance){
    select.innerHTML = '';
    let option = document.createElement("option");
    option.setAttribute('disabled', 'disabled');
    option.setAttribute('selected', 'selected');
    option.label = "Выберите пользователя"
    option.value = "title";
    console.log(arr);
    
    

    select.append(option)
    arr.forEach((el, index) => {

            let option = document.createElement("option");
            option.label = el.promoted;
            option.value = el.promoted;

            let account = contractInstance.methods
            .users(el.promoted)
            .call({ from: el.promoted })
            .then((result) => {
                console.log(result)
            account = result;
            })
            .then(()=>{
                if(account.role == "user"){
                    select.append(option);    
                }
            })
      
    });
    select.prepend
    console.log("filled");
  }
  