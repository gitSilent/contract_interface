import {
  showAuthorization,
  hideAuthorization,
  showLogining,
  showRegistration,
  hideCreateTransact,
  showCreateTransact,
  hideAllTransactions,
  showAllTransactions,
  hideReceiveTransaction,
  showAdminButton,
  hideAdminPanel,
  showModalVoting,
  hideModalVoting,
  showModalAddPattern,
  showAdminPanel,
  hideAdminButton
} from "./src/hideShowElements.js"; // импорт функций для отображения/скрытия окна авторизации, входа в аккаунт(отдельно) и регистрации(отдельно)
import * as vars from "./src/variables.js"; // импорт констант с querySelector
import { createAdminPanel } from "./src/createAdminPanel.js";
import { fillAllTransactions } from "./src/fillAllTransactions.js";
import { fillUserTransactions } from "./src/fillUserTransactions.js";
import { fillSelectAddresses } from "./src/fillSelectAddresses.js";
import { cancelTransactionEvent } from "./src/cancelTransactionEvent.js";
import { fillSelectCategories,fillSelectPatterns,fillPatternsSums } from "./src/fillSelectCategories.js";
import { createEmptyOption } from "./src/createEmptyOption.js";
import {fillSelectForChoosePromoting} from "./src/fillSelectForChoosePromoting.js"
import { fillSelectOnlyUsers } from "./src/fillSelectOnlyUsers.js";
import {fillVotingItem} from "./src/fillVotingItem.js"
import {getCatNames, getPatNames, getPatSums} from "./src/interactWithCategories_Patterns.js"
import {fillModalAddPattern} from "./src/fillModalAddPattern.js"
console.log("hi");

let contractAddress = "0x63Cb53500A70ECc5D471F65D773d1263F8120e21";

let web3, contractInstance, curUser;
let catNames, patternNames;
let arrPromotions;

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);
  console.log("u connected to blockchain");
  contractInstance = new web3.eth.Contract(vars.abi, contractAddress);
  console.log(contractInstance);
}

async function getAccounts() {
  let result = await web3.eth.getAccounts();
  result.forEach(async(accountAdr)=>{
    console.log(accountAdr)

    console.log(await web3.eth.personal);
    // await web3.eth.personal.unlockAccount(accountAdr, "1234");

  })
  console.log(result)
  return result;
}

//вход в аккаунт (отображение страницы с функциями пользователя и администратора )
function enterAccount(user, adr, balance) {
  console.log("enter");
  hideAuthorization(); //скрытие окна авторизации

  localStorage.setItem("currentUser", adr); // запись адреса текущего пользователя в localStorage

  vars.userAddress.textContent = `Адрес пользователя ${adr}`; //заполнение полей на странице данными пользователя
  vars.userRole.textContent = `Ваш статус ${user.role}`;
  vars.userBalance.textContent = `Ваш баланс ${balance} eth`;
  console.log("func");
}

function getAllTransacts() {
  return contractInstance.methods
    .getTransactionsHistoryArr()
    .call({ from: curUser })
    .then((val) => {
      return val;
    });
}

function receiveTransactionEvent() { //функция получения транзакции
  let h2Text = event.target.closest("div").querySelector("h2").textContent;
  let gottenId = parseInt(h2Text.match(/\d+/));

  let h2Sum = event.target
    .closest("div")
    .querySelector(".field-sum").textContent;
  let gottenSum = parseInt(h2Sum.split(":")[1]);



  let insertedCodeWord = vars.inputRecieveCodeWord();


  contractInstance.methods
    .receiveTransaction(gottenId, insertedCodeWord.value)
    .send({
      from: curUser,
      gas: 300000000,
    })
    .then(() => {
      location.reload();
    });
}

network();
getAccounts();


//функция для стартовой отрисовки страницы в зависимости от нахождения в localStorage данных о текущем пользователе
//если функция не находит в localStorage адреса пользователя, то отрисовывает окно авторизации
(async () => {
  getCatNames(contractInstance);
  getPatNames(contractInstance);
  getPatSums(contractInstance);

  try {
    arrPromotions = await contractInstance.methods.getPromotionArr().call() //присвоение массива голосования

    curUser = localStorage.getItem("currentUser");

    let userBalance = await web3.eth.getBalance(curUser); // получение баланса пользователя
    userBalance = web3.utils.fromWei(userBalance);

    let user = await contractInstance.methods //получение объекта пользователя
      .getUser(curUser)
      .call({ from: curUser });

    enterAccount(user, localStorage.getItem("currentUser"), userBalance);//функция входа в аккаунт

    if (user.role == "admin") {
      showAdminButton();
      getAccounts().then((arr) => {
        fillSelectOnlyUsers(vars.selectVoting, arr, contractInstance);
      });

      contractInstance.methods.getPromotionArr().call()
      .then((arr)=>{
        let arrPromoted = [];
        arr.forEach((el)=>{
          arrPromoted.push(el)
          console.log(el.promoted)
        })
        console.log(arr)
        fillSelectForChoosePromoting(vars.selectPromoted, arrPromoted, contractInstance)
      })

    } else{
      hideAdminPanel();
      hideAdminButton();

    }
    
    fillSelectCategories(contractInstance);

    
  } catch(er) {
    hideAdminButton();
    showAuthorization();
    getAccounts().then((arr) => {
      fillSelectAddresses(vars.selectAuth, arr, contractInstance);
    });
  }
  document.querySelector(".layer-preload").style.visibility = "hidden";

})();

getAllTransacts().then((arr) => {
  fillAllTransactions(arr, curUser, web3);
  fillUserTransactions(arr, curUser, web3, contractInstance);
});

vars.authForm.addEventListener("submit", async () => {
  //слушатель событий на форму авторизации
  event.preventDefault();
  let login = vars.authLoginInput.value;
  let password = vars.authPasswordInput.value;
  let userBalance = await web3.eth.getBalance(login);
  userBalance = web3.utils.fromWei(userBalance);

  let responseAccount = await contractInstance.methods
    .getUser(login)
    .call({ from: "0x455cfFeA5e0C022C2864d4005aFfB3edA74c3f70" });
  console.log(responseAccount);
  if (responseAccount.password == password) {
    //проверка валидности логина и пароля в соответствии с маппингом контракта
    console.log("successful enter");
    console.log();
    location.reload();
    enterAccount(responseAccount, login, userBalance);
  } else {
    console.log("wrong password or/and login");
  }
});
// событие на кнопку Регистрации на странице Авторизации
vars.authRegBtn.addEventListener("click", showRegistration);

// событие на кнопку Войти на странице Регистрации
vars.regEnterBtn.addEventListener("click", () => {
  showLogining();
});

// событие на кнопку Выход на странице аккаунта пользователя
vars.btnExit.addEventListener("click", () => {
  showAuthorization();
  hideAdminButton();
  getAccounts().then((arr) => {
    fillSelectAddresses(vars.selectAuth, arr, contractInstance);
  });
  vars.tableBodyUserTransactions.innerHTML = "";
});

//событие на кнопку Показать все транзакции
vars.btnShowAllTranasctions.addEventListener("click", async () => {
  console.log("__________");
  getAllTransacts().then((arr) => {
    fillAllTransactions(arr, curUser, web3);
  });
  showAllTransactions();
  console.log("__________");
});

//событие на крестие модального окна добавления транзакции
vars.imgAddTransactCross.addEventListener("click", hideCreateTransact);

vars.btnAddTransact.addEventListener("click", () => {
  showCreateTransact();
  getAccounts().then((arr) => {
    fillSelectAddresses(vars.selectCreateTransaction, arr, contractInstance);
  });
});

vars.btnSendTransactions.addEventListener("click", async () => {
  try{
    if(vars.selectCategory.options[vars.selectCategory.selectedIndex].value == "none"){
      return alert("Выберите категорию")
    } else if(!vars.inputCodeWord.value.trim().length){
      return alert("Введите кодовое слово")
    }else{
      hideCreateTransact();
      await contractInstance.methods
        .createTransaction(
          vars.inputRecieverAddress.value,
          web3.utils.toWei(vars.inputTransactionSum.value, "ether"),
          vars.selectCategory.options[vars.selectCategory.selectedIndex].label,
          vars.inputCodeWord.value,
          vars.inputCheckboxSafetyTransact.checked,
          vars.inputDesc.value
        )
        .send({
          from: curUser,
          value: web3.utils.toWei(vars.inputTransactionSum.value, "ether"),
          gas: 3000000,
        });
      console.log("clicked send");
      location.reload();
    }
  }catch(er){
    console.log(er);
    alert("Проверьте правильность заполнения полей")
  }
  
});

vars.imgCrossAdminPanel.addEventListener('click', hideAdminPanel)
vars.btnShowAdminPanel.addEventListener('click', showAdminPanel)
//событие на крестие модального окна отображения всех транзакций
vars.imgAllTransactCross.addEventListener("click", hideAllTransactions);

//событие на крестие модального окна получения транзакции
vars.imgModalReceiveTransactionCross.addEventListener("click", hideReceiveTransaction);

vars.btnReceiveTransaction.addEventListener("click", () => {
  receiveTransactionEvent();
});

vars.selectAuth.addEventListener("change", () => {
  vars.authLoginInput.value = vars.selectAuth.value;
});

vars.selectCreateTransaction.addEventListener("change", () => {
  vars.inputRecieverAddress.value = vars.selectCreateTransaction.value;
});

vars.regRegBtn.addEventListener("click", () => {
  event.preventDefault();
  let insertedLogin = vars.regLoginInput.value;
  let insertedPassword = vars.regPasswordInput.value;

  contractInstance.methods
    .registration(insertedLogin, insertedPassword)
    .send({ from: insertedLogin })
    .then((response) => {
      console.log(response);
      alert("Вы зарегистрированы");
      showAuthorization();
      location.reload();
    });
});

vars.selectCategory.addEventListener("change", () => {

  vars.selectPattern.innerHTML = "";
  vars.selectSum.innerHTML = "";

  vars.selectSum.append(
    (() => {
      let option = createEmptyOption();
      option.label = "Выберите сумму";
      return option;
    })()
  );

  vars.selectPattern.append(
    (() => {
      let option = createEmptyOption();
      option.label = "Выберите шаблон";
      return option;
    })()
  );
  fillSelectPatterns(vars.selectCategory.value)
});
vars.selectPattern.addEventListener("change", async () => {
  vars.selectSum.innerHTML = "";

  vars.selectSum.append(
    (() => {
      let option = createEmptyOption();
      option.label = "Выберите сумму";
      return option;
    })()
  );
fillPatternsSums(vars.selectCategory.value,vars.selectPattern.value,vars.selectSum.value)
  
});
vars.selectSum.addEventListener("change", () => {
  vars.inputTransactionSum.value =
    vars.selectSum.options[vars.selectSum.selectedIndex].label;
});
vars.btnConfirmTransact.addEventListener('click', ()=>{
  let insertedId = vars.inputConfirmTransact.value;
  // console.log(vars.inputConfirmTransact.value)
  contractInstance.methods.confirmTransaction(insertedId).send({from:curUser})
  .then((value)=>{
    console.log(value)
  })
})

vars.btnStartVoting.addEventListener("click", async()=>{
  let choosenUser = vars.selectVoting.options[vars.selectVoting.selectedIndex];
  if(choosenUser.value != "title"){


    // arrPromotions = await contractInstance.methods.getPromotionArr().call()
    console.log(arrPromotions)
    
    let allowStartVoting = true;
    arrPromotions.forEach((el)=>{
      console.log(el.promoted)
      if(el.active && el.promoted == choosenUser.label){
        alert("Этот пользователь уже есть в списке голосований")
        allowStartVoting = false;
        return 
      }
    })

    if(allowStartVoting){
      console.log("начать голосование")
      await contractInstance.methods.startPromotionVoting(choosenUser.label).send({from: curUser})
      location.reload()


    }else{
      console.log("не начать голосование")
    }

  } else{
    console.log("ypu should choose user")
  }
})



vars.btnToVote.addEventListener('click', ()=>{
  let choosenUser = vars.selectPromoted.options[vars.selectPromoted.selectedIndex];
  if(choosenUser.value != "title"){
    showModalVoting()
    fillVotingItem(arrPromotions,choosenUser.label,contractInstance,curUser);
    // contractInstance.methods.toVote // переделать
  }
  console.log(choosenUser)
})

vars.btnAddCategory.addEventListener('click', ()=>{
  let insertedCategName = prompt("Введите название новой категории")

  contractInstance.methods.createNewCategory(insertedCategName).send({from:curUser})
  .then((val)=>{
    console.log(val)
    location.reload()
  })

})
vars.btnAddPattern.addEventListener('click', ()=>{
  fillModalAddPattern()

  fillSelectCategories(contractInstance)
  showModalAddPattern()


})

/**
 * @type {HTMDivLElement}
 */
const modal = document.querySelector(".layer-modal-addTransaction");

console.log(contractInstance, contractInstance.methods);
// console.log(contractInstance, contractInstance.methods.transactionHistory());

// contractInstance.methods
//   .qtyAdmins
//   .call({ from: "0x1df6633Db1ADA7bcbBCC1A5A3e75f65315B4fADa" })
//   .then((result) => {
//     console.log(result);
//   });

//   contractInstance.methods
//   .users()
//   .call()
//   .then((result) => {
//     console.log(result);
//   });

contractInstance.methods
  .qtyAdmins()
  .call()
  .then((result) => {
    console.log(result);
  });

contractInstance.methods
  .users("0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA")
  .call({ from: "0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA" })
  .then((result) => {
    console.log(result);
  });
