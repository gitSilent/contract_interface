console.log("hi");

let contractAddress = "0x51e4075a30ccaed53E66F985ADF08782C3660E8f";

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
		"inputs": [],
		"name": "returnValue",
		"outputs": [],
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
		"name": "getTransactionHistory",
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
const authEnterBtn = document.querySelector(".btn-enter-auth");
const authRegBtn = document.querySelector(".btn-reg-auth");
const authLoginInput = document.querySelector(".auth-login-input");
const authPasswordInput = document.querySelector(".auth-password-input");

authEnterBtn.addEventListener("click", async () => {
  let login = authLoginInput.value;
  let password = authPasswordInput.value;
  console.log(login, password);
  await console.log(contractInstance.methods.getUser(login));
});

let web3, contractInstance;

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  console.log(web3);
  console.log("u connected to blockchain");
  contractInstance = new web3.eth.Contract(abi, contractAddress);
}
async function getAccounts() {
  result = await web3.eth.getAccounts();
  console.log(result);
  // getBalance(result[0]);
  // createUl(result)
}

network();

getAccounts();

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