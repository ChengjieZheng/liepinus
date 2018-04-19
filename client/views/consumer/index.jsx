import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { observer, inject } from 'mobx-react'

import ClientHeader from '../components/header/client-business-header/client-header'
import { AppState } from '../../store/app-state'
import ClientHomeStyles from './client-home-styles'

@inject('appState') @observer

class ClientHome extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleLanguageChange = this.handleLanguageChange.bind(this)
	}

	handleLanguageChange() {
		this.props.appState.changeLanguage()
	}

	render() {
		const { classes } = this.props

		return (this.props.appState.language
		?
		<div>
			<ClientHeader />
			<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary">
					Word of the Day
				</Typography>
				<Typography variant="headline" component="h2">
					{this.props.appState.language ? 'true' : 'false'}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					adjective
				</Typography>
				<Typography component="p">
					well meaning and kindly.<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={this.handleLanguageChange}>Learn More</Button>
			</CardActions>
			</Card>
		</div>
		:
			<div>
				<ClientHeader />
				<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						大家好
					</Typography>
					<Typography variant="headline" component="h2">
						{this.props.appState.language ? 'true' : 'false'}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						哈哈哈
					</Typography>
					<Typography component="p">
						买卖皮<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={this.handleLanguageChange}>Learn More</Button>
				</CardActions>
				</Card>
			</div>
		)
	}
}

ClientHome.propTypes = {
	appState: PropTypes.instanceOf(AppState),
}

ClientHome.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(ClientHomeStyles)(ClientHome)
