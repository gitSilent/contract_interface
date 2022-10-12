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
  showAdminPanel,
  hideAdminPanel
} from "./src/hideShowElements.js"; // импорт функций для отображения/скрытия окна авторизации, входа в аккаунт(отдельно) и регистрации(отдельно)
import * as vars from "./src/variables.js"; // импорт констант с querySelector
import { createAdminPanel } from "./src/createAdminPanel.js";
import { fillAllTransactions } from "./src/fillAllTransactions.js";
import { fillUserTransactions } from "./src/fillUserTransactions.js";
import { fillSelectAddresses } from "./src/fillSelectAddresses.js";
import { cancelTransactionEvent } from "./src/cancelTransactionEvent.js";
import { fillSelectCategories } from "./src/fillSelectCategories.js";
import { createEmptyOption } from "./src/createEmptyOption.js";
console.log("hi");

let contractAddress = "0x413E10df04401348639B4bD4B7fEa48D2bd0D5A8";

let web3, contractInstance, curUser;
let catNames, patternNames;

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);
  console.log("u connected to blockchain");
  contractInstance = new web3.eth.Contract(vars.abi, contractAddress);
  console.log(contractInstance);
}

async function getAccounts() {
  let result = await web3.eth.getAccounts();
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

function receiveTransactionEvent() {
  let h2Text = event.target.closest("div").querySelector("h2").textContent;
  let gottenId = parseInt(h2Text.match(/\d+/));

  let h2Sum = event.target
    .closest("div")
    .querySelector(".field-sum").textContent;
  let gottenSum = parseInt(h2Sum.split(":")[1]);

  console.log(gottenSum);

  console.log(parseInt(h2Text.match(/\d+/)));

  let insertedCodeWord = vars.inputRecieveCodeWord();

  console.log(insertedCodeWord.value);

  contractInstance.methods
    .receiveTransaction(gottenId, insertedCodeWord.value)
    .send({
      from: curUser,
      gas: 3000000,
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
  try {
    curUser = localStorage.getItem("currentUser");

    let userBalance = await web3.eth.getBalance(curUser);
    userBalance = web3.utils.fromWei(userBalance);

    let user = await contractInstance.methods
      .getUser(curUser)
      .call({ from: curUser });

    enterAccount(user, localStorage.getItem("currentUser"), userBalance);
    if (user.role == "admin") {
      showAdminPanel();
    } else{
      hideAdminPanel();
    }
    
    catNames = await contractInstance.methods.getCatNames().call();
    patternNames = await contractInstance.methods.getPatNames().call();
    fillSelectCategories(catNames, patternNames);

    console.log("async");
    console.log(user);
  } catch(er) {
    console.log(er)
    console.log("catch");
    showAuthorization();
    getAccounts().then((arr) => {
      fillSelectAddresses(vars.selectAuth, arr, contractInstance);
    });
  }
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

vars.authRegBtn.addEventListener("click", showRegistration);
// событие на кнопку Регистрации на странице Авторизации

vars.regEnterBtn.addEventListener("click", () => {
  showLogining();
});
// событие на кнопку Войти на странице Регистрации

vars.btnExit.addEventListener("click", () => {
  showAuthorization();
  getAccounts().then((arr) => {
    fillSelectAddresses(vars.selectAuth, arr, contractInstance);
  });
  vars.tableBodyUserTransactions.innerHTML = "";
});
// событие на кнопку Выход на странице аккаунта пользователя

vars.btnShowAllTranasctions.addEventListener("click", async () => {
  console.log("__________");
  getAllTransacts().then((arr) => {
    fillAllTransactions(arr, curUser, web3);
  });
  showAllTransactions();
  console.log("__________");
});

vars.imgAddTransactCross.addEventListener("click", hideCreateTransact);

vars.btnAddTransact.addEventListener("click", () => {
  showCreateTransact();
  getAccounts().then((arr) => {
    fillSelectAddresses(vars.selectCreateTransaction, arr, contractInstance);
  });
});

vars.btnSendTransactions.addEventListener("click", async () => {
  hideCreateTransact();
  await contractInstance.methods
    .createTransaction(
      vars.inputRecieverAddress.value,
      web3.utils.toWei(vars.inputTransactionSum.value, "ether"),
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
});

vars.imgAllTransactCross.addEventListener("click", hideAllTransactions);
vars.imgModalReceiveTransactionCross.addEventListener(
  "click",
  hideReceiveTransaction
);

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
  vars.selectPattern.append(
    (() => {
      let option = createEmptyOption();
      option.label = "Выберите шаблон";
      return option;
    })()
  );

  patternNames[event.target.value].forEach((val) => {
    let option = document.createElement("option");
    option.label = val;

    vars.selectPattern.append(option);
  });
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

  let cat = vars.selectCategory;
  let pat = vars.selectPattern;
  console.log(cat.options[cat.selectedIndex].label);
  let choosenCategory = cat.options[cat.selectedIndex].label;
  let choosenPattern = pat.options[pat.selectedIndex].label;

  let sumArray = await contractInstance.methods
    .getPatternArray(choosenCategory, choosenPattern)
    .call();
  sumArray.forEach((val) => {
    let option = document.createElement("option");
    option.label = val;

    vars.selectSum.append(option);
  });
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
/**
 * @type {HTMDivLElement}
 */
const modal = document.querySelector(".layer-modal-addTransaction");

// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "Escape") {
//     console.dir(modal);
//     if (!modal.style.display) {
//       modal.style.display = "none";
//     } else {
//       modal.style.display = "";
//     }
//   }
// });

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

// console.log(contract_name.getTransactionHistory())

// (async() => {
// 	console.log(await contractInstance.methods.users("0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA").call())

// console.log(result);

// })()
