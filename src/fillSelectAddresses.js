// import { fillSelectAddresses } from "./fillSelectAddresses.js";

export function fillSelectAddresses(select, arr, contractInstance) {
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
    option.label = el;
    option.value = el;
    let account = contractInstance.methods
    .users(el)
    .call({ from: el })
    .then((result) => {
       account = result;
    })
    .then(()=>{
        if(account.role){
            select.append(option);    
        }
    })
  });
  select.prepend
  console.log("filled");
}
