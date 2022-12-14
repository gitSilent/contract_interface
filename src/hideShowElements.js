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
	hideAdminPanel()
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
// export function hideAdminPanel(){
// 	vars.divAdminPanel.style.visibility = 'hidden';
// 	vars.divAdminPanel.style.position = 'absolute';
// }
export function showAdminButton() {
	vars.btnShowAdminPanel.style.visibility = 'visible'

  	vars.layerAdminPanel.style.visibility = 'hidden';
  	vars.layerAdminPanel.style.position = 'absolute';
}
export function hideAdminButton() {
	vars.btnShowAdminPanel.style.visibility = 'hidden'
}
export function showAdminPanel(){
	vars.layerAdminPanel.style.visibility = 'visible';
}
export function hideAdminPanel(){
	vars.layerAdminPanel.style.visibility = 'hidden';
}
export function hideModalVoting(){
	vars.layerModalVoting.style.visibility = 'hidden';
}
export function showModalVoting(){
	vars.layerModalVoting.style.visibility = 'visible';
}
export function hideModalAddPattern(){
	vars.layerModalAddPattern.style.visibility = 'hidden'
}
export function showModalAddPattern(){
	vars.layerModalAddPattern.style.visibility = 'visible'
}