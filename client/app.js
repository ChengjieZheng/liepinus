import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './views/App'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line

import AppState from './store/app-state'

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const root = document.getElementById('root')
// hot-module-replacement配置
// AppContainer包裹我们的根节点想要渲染的实际的HTML内容
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}
render(App)

if (module.hot) {
  // 当有需要热更新的代码出现的时候，我们去把我们的APP重新加载一遍
  module.hot.accept('./views/App.jsx', () => {
    // 加载完成后：由于模块是被export default出来的，但require不会默认加载default，所以我们要自己加一下default
    const NextApp = require('./views/App.jsx').default //eslint-disable-line
    // 重新渲染到document内
    render(NextApp)
  })
}
