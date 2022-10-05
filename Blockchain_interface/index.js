
const contractAddress = "0x96f1765D0B78772A56790B066f6E12495CA9fD92";
const abi = [
	{
		"inputs": [],
		"name": "retrieve",
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
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const h1 = document.querySelector('.user');
const accountField = document.querySelector('.account');
let web3, balance
const buttonGetNumber = document.querySelector(".get-balance-button")
const buttonSetNumber = document.querySelector(".set-balance-button")
document.querySelector(".input-inp").setAttribute("readonly", "readonly");
let inputt = document.querySelector(".input-inp")
// inputt.disabled

let result ;

function network() {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log(web3)
	console.log('u connected to blockchain');
	contractInstance = new web3.eth.Contract(abi, contractAddress)
}

	network()
	getAccounts()

	async function getAccounts() {
		result = await web3.eth.getAccounts()
		console.log(result)
		getBalance(result[0]);
		createUl(result)
	}

	async function getBalance(account) {
		balance = await web3.eth.getBalance(account)
		h1.textContent = ` your balance ${web3.utils.fromWei(balance, 'ether')} Ether`
		accountField.textContent = ` your account ${account} `
		result = account;
	}

	function createUl(arr) {
		let select = document.createElement('select');
		select.className = 'list';

		arr.forEach((item, index) => {
			let option = document.createElement('option');
			option.className = 'list-item';
			option.textContent = item;
			select.append(option)

		})

		select.addEventListener('change', () => {
			console.log(select.value)
			h1.textContent = getBalance(select.value)
		})
		document.body.append(select)
	}

async function getNumber() {
	let number = await contractInstance.methods.retrieve().call()
	console.log(number)
	inputt.value = number;	
}
	
getNumber();

buttonGetNumber.addEventListener("click", () => {
	getNumber();
	// console.log('1')
	// inputt.value = getNumber().PromiseResult;
	// console.log(getNumber().PromiseResult)
	
})

buttonSetNumber.addEventListener("click", () => {
	setNumber();
	// console.log('1')
	// inputt.value = getNumber().PromiseResult;
	// console.log(getNumber().PromiseResult)
	
})

async function setNumber() {
	const value = document.querySelector(".setNum").value
	const result1 = await contractInstance.methods.store(value).send({
		from: result
	})
	console.log("Transaction:", result)
}