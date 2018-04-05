import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
// material-ui setup
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'

import { createStoreMap } from './store/store'
import App from './views/App'

// 让mobx在服务端渲染时不会重复的数据交换
useStaticRendering(true)

export default (stores, routerContext, sheetsRegistry, jss, theme, url) => (
	<Provider {...stores}>
		<StaticRouter context={routerContext} location={url}>
			<JssProvider registry={sheetsRegistry} jss={jss}>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</JssProvider>
		</StaticRouter>
	</Provider>
)

export { createStoreMap }
