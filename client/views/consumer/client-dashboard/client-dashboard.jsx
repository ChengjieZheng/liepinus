import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('appState') @observer
class ClientDashboard extends React.Component {
	componentDidMount() {
		console.log(this.props.appState.isClientLogin)
	}

	render() {
		return (
			<div>
				<h1>Hello! this is Client dashboard</h1>
			</div>
		)
	}
}

export default ClientDashboard
