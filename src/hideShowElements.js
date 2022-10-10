import * as vars from './variables.js'
import { fillSelectAddresses } from "./fillSelectAddresses.js";

export function hideAuthorization(){
	vars.authLayer.style.visibility = 'hidden'
	vars.regLayer.style.visibility = 'hidden'

	vars.authLayer.style.position = 'absolute'
	vars.regLayer.style.position = 'absolute'

	vars.userAccount.style.visibility = 'visible'
	vars.userAccount.style.position = 'relative'
}
export function showAuthorization(){
	localStorage.removeItem('currentUser')
	// fillSelectAddresses(arr);
	vars.authLayer.style.visibility = 'visible'
	vars.regLayer.style.visibility = 'hidden'

	vars.authLayer.style.position = 'relative'
	vars.regLayer.style.position = 'absolute'

	vars.userAccount.style.visibility = 'hidden'
	vars.userAccount.style.position = 'absolute'
}
export function showLogining(){
	localStorage.removeItem('currentUser')

    vars.regLayer.style.visibility = 'hidden'
	vars.regLayer.style.position = 'absolute'
	
	vars.authLayer.style.visibility = 'visible';
	vars.authLayer.style.position = 'relative'
}
export function showRegistration(){
	localStorage.removeItem('currentUser')

    vars.regLayer.style.visibility = 'visible'
	vars.regLayer.style.position = 'relative'
	
	vars.authLayer.style.visibility = 'hidden';
	vars.authLayer.style.position = 'absolute'
}

export function hideCreateTransact(){
	vars.layerModalAddTransaction.style.visibility = 'hidden'
}
export function showCreateTransact(){
	vars.layerModalAddTransaction.style.visibility = 'visible'
}
export function hideAllTransactions(){
	vars.layerModalAllTransactions.style.visibility = 'hidden'
}
export function showAllTransactions(){
	vars.layerModalAllTransactions.style.visibility = 'visible'
}
export function hideReceiveTransaction(){
	vars.layerModalRecieveTransaction.style.visibility = 'hidden'
}
export function showReceiveTransaction(){
	vars.layerModalRecieveTransaction.style.visibility = 'visible'
}