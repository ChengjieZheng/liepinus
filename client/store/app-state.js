import { observable, action } from 'mobx'
// computed,
export default class AppState {
	// constructor({ count, name } = { count: 0, name: 'David' }) {
	// 	this.count = count
	// 	this.name = name
	// }
  // @observable count
  // @observable name
  // @computed get msg() {
  //   return `${this.name} say count is ${this.count}`
  // }
  // @action add() {
  //   this.count += 1
	// }
	// @action changeName(name) {
	// 	this.name = name
	// }
	// toJson() {
	// 	return {
	// 		count: this.count,
	// 		name: this.name,
	// 	}
	// }

	constructor(clientId, clientName, clientEmail, userType, isClientLogin) {
		this.clientId = clientId
		this.clientName = clientName
		this.clientEmail = clientEmail
		this.userType = userType
		this.isClientLogin = isClientLogin
	}
	@observable clientId
	@observable clientName
	@observable clientEmail
	@observable userType
	@observable isClientLogin

	// handle client login data ///////
	@action clientRegisterInfo(clientId, clientName, clientEmail, userType, isClientLogin) {
		this.clientId = clientId
		this.clientName = clientName
		this.clientEmail = clientEmail
		this.userType = userType
		this.isClientLogin = isClientLogin
	}
	// /////////////////////////////

	// handle language change ///////
	@observable language = true
	@action changeLanguage() {
		this.language = !this.language
	}
	// ///////////////////////////////
	toJson() {
		return {
			username: this.username,
			password: this.password,
			email: this.email,
			type: this.type,
			language: this.language,
		}
	}
}
