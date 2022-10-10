// import { fillSelectAddresses } from "./fillSelectAddresses.js";

export function fillSelectAddresses(select, arr, contractInstance) {
  console.log(arr);

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

  console.log("filled");
}
