export const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idTransaction",
				"type": "uint256"
			}
		],
		"name": "cancelTransaction",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
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
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "categories_names",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
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
		"name": "cats",
		"outputs": [
			{
				"internalType": "string",
				"name": "category_name",
				"type": "string"
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
		"inputs": [],
		"name": "getCatNames",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
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
		"name": "getPatNames",
		"outputs": [
			{
				"internalType": "string[][]",
				"name": "",
				"type": "string[][]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pattern",
				"type": "string"
			}
		],
		"name": "getPatternArray",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patterns_names",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
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
export const authLayer = document.querySelector(".auth");
export const authForm = document.querySelector(".auth-cont");

export const authEnterBtn = document.querySelector(".btn-enter-auth");
export const authRegBtn = document.querySelector(".btn-reg-auth");
export const authLoginInput = document.querySelector(".auth-login-input");
export const authPasswordInput = document.querySelector(".auth-password-input");

export const regLayer = document.querySelector(".reg");
export const regForm = document.querySelector(".reg-cont");

export const regRegBtn = document.querySelector(".btn-reg-reg");
export const regEnterBtn = document.querySelector(".btn-enter-reg");
export const regLoginInput = document.querySelector(".reg-login-input");
export const regPasswordInput = document.querySelector(".reg-password-input");

export const userAccount = document.querySelector(".user-account");
export const userAddress = document.querySelector(".user-address");
export const userRole = document.querySelector(".user-role");
export const userBalance = document.querySelector(".user-balance");
export const userTransactions = document.querySelector(".user-transactions");
export const tableBodyUserTransactions = document.querySelector(
  ".table-body-userTransactions"
);

export const btnExit = document.querySelector(".btn-exit");
export const btnShowAllTranasctions = document.querySelector(
  ".btn-showAllTransactions"
);
export const btnAddTransact = document.querySelector(".add-transact");

export const layerModalAddTransaction = document.querySelector(
  ".layer-modal-addTransaction"
);
export const inputRecieverAddress = document.querySelector(
  ".input-recieverAddress"
);
export const inputTransactionSum = document.querySelector(
  ".input-transactionSum"
);
export const inputCheckboxSafetyTransact = document.querySelector(
  ".input-checkbox-safetyTransact"
);
export const inputCodeWord = document.querySelector(".input-codeWord");
export const inputDesc = document.querySelector(".input-desc");
export const btnSendTransactions = document.querySelector(
  ".btn-sendTransactions"
);
export const imgAddTransactCross = document.querySelector(
  ".img-modal-addTransaction-cross"
);

export const tableBodyAllTransactions = document.querySelector(
  ".table-body-allTransactions"
);
export const imgAllTransactCross = document.querySelector(
  ".img-modal-allTransaction-cross"
);
export const layerModalAllTransactions = document.querySelector(
  ".layer-modal-allTransactions"
);

export const modalRecieveTransaction = document.querySelector(
  ".modal-recieveTransaction"
);
export const layerModalRecieveTransaction = document.querySelector(
  ".layer-modal-recieveTransaction"
);
export const imgModalReceiveTransactionCross = document.querySelector(
  ".img-modal-receiveTransaction-cross"
);
export const transactionField = document.querySelector(".transaction-field");
export const btnReceiveTransaction = document.querySelector(
  ".btn-receive-transaction"
);
export const inputRecieveCodeWord = () => {
  return document.querySelector(".input-recieve-codeWord");
};
export const selectAuth = document.querySelector('.select-auth');

export const btnCancelTransaction = ()=>{
  return document.querySelector(".tr-btn-cancel")
}
export const selectCreateTransaction = document.querySelector(
  ".select-createTransaction"
);
export const selectCategory = document.querySelector('.select-category')
export const selectPattern = document.querySelector('.select-pattern')
export const selectSum = document.querySelector('.select-sum')