import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
	AppState,

}

// 服务端渲染用
export const createStoreMap = () => (
	{
		appState: new AppState(),
	}
)
