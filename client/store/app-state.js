import { observable, computed, action } from 'mobx'

export class AppState {
  @observable count = 0
  @observable name = 'David'
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
	}
	@action changeName(name) {
		this.name = name
	}
}

const appState = new AppState()

// 一旦app更新了，就打印
// autorun(() => {
//   console.worning(appState.msg)
// })

setInterval(() => {
  appState.add()
}, 1000)

export default appState
