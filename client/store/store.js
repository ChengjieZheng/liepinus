import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
	AppState,

}

// export const createStoreMap = () => {
// 	return {
// 		// 服务端渲染专用
// 		appState: new AppState(),
// 	}
// }

export const createStoreMap = function () {
	return {
		// 服务端渲染专用
		appState: new AppState(),
	}
}
