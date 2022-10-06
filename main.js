import {showAuthorization,hideAuthorization,showLogining, showRegistration} from './src/hideShowAuth.js' // импорт функций для отображения/скрытия окна авторизации, входа в аккаунт(отдельно) и регистрации(отдельно) 
import * as vars from './src/variables.js' // импорт констант с querySelector

console.log("hi");
let contractAddress = "0xf9661cA8921fEA6c577a625948d38f369b8CDa51";

// const abi = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "changingUserAddress",
//         type: "address",
//       },
//     ],
//     name: "changeRole",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "idTransaction",
//         type: "uint256",
//       },
//     ],
//     name: "confirmTransaction",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "receiverAddress",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "transactionSum",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "codeWord",
//         type: "string",
//       },
//       {
//         internalType: "bool",
//         name: "safetyTransactionStatus",
//         type: "bool",
//       },
//       {
//         internalType: "string",
//         name: "transationDescription",
//         type: "string",
//       },
//     ],
//     name: "createTransaction",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "idTransaction",
//         type: "uint256",
//       },
//       {
//         internalType: "string",
//         name: "enteredCodeWord",
//         type: "string",
//       },
//     ],
//     name: "receiveTransaction",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "returnMsgValue",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "returnValue",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "voted",
//         type: "address",
//       },
//     ],
//     name: "startPromotionVoting",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "idPromotion",
//         type: "uint256",
//       },
//     ],
//     name: "toVote",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     stateMutability: "payable",
//     type: "constructor",
//   },
//   {
//     inputs: [],
//     name: "getBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "adr",
//         type: "address",
//       },
//     ],
//     name: "getContractBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getPromotionArr",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "address",
//             name: "promoted",
//             type: "address",
//           },
//           {
//             internalType: "address[]",
//             name: "votes",
//             type: "address[]",
//           },
//           {
//             internalType: "bool",
//             name: "active",
//             type: "bool",
//           },
//         ],
//         internalType: "struct transactions.Promotion[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getTransactionHistory",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "address",
//             name: "receiverAddress",
//             type: "address",
//           },
//           {
//             internalType: "address",
//             name: "senderAddress",
//             type: "address",
//           },
//           {
//             internalType: "uint256",
//             name: "transactionSum",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "activeTransaction",
//             type: "bool",
//           },
//           {
//             internalType: "bool",
//             name: "moneyWasSended",
//             type: "bool",
//           },
//           {
//             internalType: "string",
//             name: "codeWord",
//             type: "string",
//           },
//           {
//             internalType: "uint256",
//             name: "attemptsQty",
//             type: "uint256",
//           },
//           {
//             internalType: "bool",
//             name: "confirmedByWord",
//             type: "bool",
//           },
//           {
//             internalType: "bool",
//             name: "safetyTransactionStatus",
//             type: "bool",
//           },
//           {
//             internalType: "bool",
//             name: "confirmedByAdmin",
//             type: "bool",
//           },
//           {
//             internalType: "string",
//             name: "transationDescription",
//             type: "string",
//           },
//         ],
//         internalType: "struct transactions.Transaction[]",
//         name: "",
//         type: "tuple[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "qtyAdmins",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "transactionsHistory",
//     outputs: [
//       {
//         internalType: "address",
//         name: "receiverAddress",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "senderAddress",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "transactionSum",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "activeTransaction",
//         type: "bool",
//       },
//       {
//         internalType: "bool",
//         name: "moneyWasSended",
//         type: "bool",
//       },
//       {
//         internalType: "string",
//         name: "codeWord",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "attemptsQty",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "confirmedByWord",
//         type: "bool",
//       },
//       {
//         internalType: "bool",
//         name: "safetyTransactionStatus",
//         type: "bool",
//       },
//       {
//         internalType: "bool",
//         name: "confirmedByAdmin",
//         type: "bool",
//       },
//       {
//         internalType: "string",
//         name: "transationDescription",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "users",
//     outputs: [
//       {
//         internalType: "string",
//         name: "password",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "role",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "changingUserAddress",
				"type": "address"
			}
		],
		"name": "changeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTransaction",
				"type": "uint256"
			}
		],
		"name": "confirmTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transactionSum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "codeWord",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "safetyTransactionStatus",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "transationDescription",
				"type": "string"
			}
		],
		"name": "createTransaction",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTransaction",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "enteredCodeWord",
				"type": "string"
			}
		],
		"name": "receiveTransaction",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnMsgValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voted",
				"type": "address"
			}
		],
		"name": "startPromotionVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idPromotion",
				"type": "uint256"
			}
		],
		"name": "toVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "categories",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPromotionArr",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "promoted",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "votes",
						"type": "address[]"
					},
					{
						"internalType": "bool",
						"name": "active",
						"type": "bool"
					}
				],
				"internalType": "struct transactions.Promotion[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTransactionsHistoryArr",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "receiverAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "senderAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "transactionSum",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "activeTransaction",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "moneyWasSended",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "codeWord",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "attemptsQty",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "confirmedByWord",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "safetyTransactionStatus",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "confirmedByAdmin",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "transationDescription",
						"type": "string"
					}
				],
				"internalType": "struct transactions.Transaction[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAdr",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					}
				],
				"internalType": "struct transactions.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patterns",
		"outputs": [
			{
				"internalType": "string",
				"name": "patternName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "promotions",
		"outputs": [
			{
				"internalType": "address",
				"name": "promoted",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "qtyAdmins",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactionsHistory",
		"outputs": [
			{
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "senderAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transactionSum",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "activeTransaction",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "moneyWasSended",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "codeWord",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "attemptsQty",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "confirmedByWord",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "safetyTransactionStatus",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "confirmedByAdmin",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "transationDescription",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let web3, contractInstance;

function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	console.log(web3);
	console.log("u connected to blockchain");
	contractInstance = new web3.eth.Contract(abi, contractAddress);
}
async function getAccounts() {
	let result = await web3.eth.getAccounts();
	console.log(result);
}
function enterAccount(user, adr){//вход в аккаунт (отображение страницы с функциями пользователя и администратора )
	console.log('enter')
	hideAuthorization();	//скрытие окна авторизации
	localStorage.setItem('currentUser', adr)// запись адреса текущего пользователя в localStorage

	vars.userAddress.textContent = `Адрес пользователя ${adr}`//заполнение полей на странице данными пользователя
	vars.userRole.textContent = `Ваш статус ${user.role}`
	console.log('func')


}

// console.log(localStorage.getItem('currentUser') != null)
network();
getAccounts();

(async () => {//функция для стартовой отрисовки страницы в зависимости от нахождения в localStorage данных о текущем пользователе 
	//если функция не находит в localStorage адреса пользователя, то отрисовывает окно авторизации
	try {
		let user = await contractInstance.methods.getUser(localStorage.getItem('currentUser')).call({ from: "0x6A44f16601Cb9dE2E28b1ACa38518eD9E560F77e" })
		enterAccount(user, localStorage.getItem('currentUser'))
		console.log('async')
	} catch {
		console.log('catch')
		showAuthorization();
	}
})()
					



vars.authForm.addEventListener("submit", async () => {//слушатель событий на форму авторизации
	event.preventDefault();
	let login = vars.authLoginInput.value;
	let password = vars.authPasswordInput.value;
	
	let responseAccount = await contractInstance.methods.getUser(login).call({ from: "0x6A44f16601Cb9dE2E28b1ACa38518eD9E560F77e" });
	console.log(responseAccount)
	if(responseAccount.password == password){//проверка валидности логина и пароля в соответствии с маппингом контракта
		console.log("successful enter")
		console.log()
		enterAccount(responseAccount, login)
	}else{
		console.log("wrong password or/and login")
	}
});
vars.authRegBtn.addEventListener('click', ()=>{ // событие на кнопку Регистрации на странице Авторизации
	showRegistration()
})
vars.regEnterBtn.addEventListener('click', ()=>{// событие на кнопку Войти на странице Авторизации
	showLogining()
})
vars.btnExit.addEventListener('click', ()=>{// событие на кнопку Выход на странице аккаунта пользователя
	showAuthorization()

})




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




contractInstance.methods.qtyAdmins().call()
	.then((result) => {
		console.log(result)
	})

contractInstance.methods.users("0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA").call({ from: "0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA" })
	.then((result) => {
		console.log(result)
	})	



// console.log(contract_name.getTransactionHistory())

// (async() => {
// 	console.log(await contractInstance.methods.users("0xc3d05f966BAE416Bd72Abc62ed81A5096F0E5FaA").call())
  
    // console.log(result);

// })()