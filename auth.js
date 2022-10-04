console.log('hi')

let contractAddress = "0xbaf54B957ACd3D5ADf898Ef61a7DB1d191c1CC48";

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
	}
]



const authEnterBtn = document.querySelector('.btn-enter-auth');
const authRegBtn = document.querySelector('.btn-reg-auth');
const authLoginInput = document.querySelector('.auth-login-input');
const authPasswordInput = document.querySelector('.auth-password-input');

let web3, contractInstance;

function network() {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log(web3)
	console.log('u connected to blockchain');
	contractInstance = new web3.eth.Contract(abi, contractAddress)
}
async function getAccounts() {
    result = await web3.eth.getAccounts()
    console.log(result)
    // getBalance(result[0]);
    // createUl(result)
}

network();

getAccounts();
console.log(contractInstance.methods.getTransactionHistory())

// console.log(contract_name.getTransactionHistory())

