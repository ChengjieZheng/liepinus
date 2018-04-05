import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { lightBlue, pink } from 'material-ui/colors'

import App from './views/App'
import AppState from './store/app-state'

// 使用material-ui定义主题
const theme = createMuiTheme({
	palette: {
		primary: lightBlue,
		accent: pink,
		type: 'light',
	},
})

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const createApp = (TheApp) => {
	class Main extends React.Component {
		// Remove the server-side injected CSS.
		componentDidMount() {
			const jssStyles = document.getElementById('jss-server-side');
			if (jssStyles && jssStyles.parentNode) {
				jssStyles.parentNode.removeChild(jssStyles);
			}
		}
		render() {
			return <TheApp />
		}
	}
	return Main
}

const root = document.getElementById('root')
// hot-module-replacement配置
// AppContainer包裹我们的根节点想要渲染的实际的HTML内容
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
					<MuiThemeProvider theme={theme}>
            <Component />
					</MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}
render(createApp(App))

if (module.hot) {
  // 当有需要热更新的代码出现的时候，我们去把我们的APP重新加载一遍
  module.hot.accept('./views/App.jsx', () => {
    // 加载完成后：由于模块是被export default出来的，但require不会默认加载default，所以我们要自己加一下default
    const NextApp = require('./views/App.jsx').default //eslint-disable-line
    // 重新渲染到document内
    render(createApp(NextApp))
  })
}
