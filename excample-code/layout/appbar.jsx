import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
	root: {
		width: '100%',
	},
	flex: {
		flex: 1,
	},
}

class MainAppBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		this.onHomeIconClick = this.onHomeIconClick.bind(this)
		this.createButtonClick = this.createButtonClick.bind(this)
		this.loginButtonClick = this.loginButtonClick.bind(this)
	}
	/* eslint-disable */
	onHomeIconClick() {

	}

	createButtonClick() {

	}

	loginButtonClick() {

	}
	/* eslint-enable */

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar position="fixed">
					<ToolBar>
						<IconButton color="default" onClick={this.onHomeIconClick}>
							<HomeIcon />
						</IconButton>
						<Typography variant="title" color="default" className={classes.flex}>
							猎聘北美
						</Typography>
						<Button raised="true" color="default" onClick={this.createButtonClick}>
							新建话题
						</Button>
						<Button color="default" onClick={this.loginButtonClick}>
							登录
						</Button>
					</ToolBar>
				</AppBar>
			</div>
		)
	}
}

MainAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
