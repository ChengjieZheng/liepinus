import React from 'react'
import { Switch } from 'react-router-dom'

import Route from '../config/router'

class App extends React.Component {
  componentDidMount() {
    // do something here
	}

	render() {
		return (
			<Switch>
				<Route />
			</Switch>
		)
  }
}
export default App
