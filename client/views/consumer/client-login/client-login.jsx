import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import List from 'material-ui/List';
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid';
import { observer, inject } from 'mobx-react'

import axios from 'axios'

import clientLoginStyles from './client-login-styles'
import ClientHeader from '../../components/header/client-business-header/client-header'

@inject('appState') @observer

class ClientLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			usernameError: '',
			password: '',
			passwordError: '',
		}
	}

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

	validate() {
		let isError = false
		const errors = {
			usernameError: '',
			passwordError: '',
		}
		if (this.state.username.length < 5) {
			isError = true
			errors.usernameError = 'Username needs to be atleast 5 characters long'
		}
		if (this.state.password.length < 8) {
			isError = true
			errors.passwordError = 'Password needs to be atleast 8 characters long'
		}
		this.setState({
			...this.state,
			...errors,
		})
		return isError
	}

	handleLogin = () => {
		const err = this.validate()
		if (!err) {
			this.setState({
				username: '',
				usernameError: '',
				password: '',
				passwordError: '',
			})
		}
		axios.post('/api/user/login', {
			user: this.state.username,
			pwd: this.state.password,
		})
		.then(res => {
			if (res.status === 200 && res.data.code === 0) {
				console.log('data from server: ', res.data)
				console.log('success')
				const {
					_id,
					user,
					email,
					type,
				} = res.data.data
				const isClientLogin = true
				this.props.appState.clientRegisterInfo(_id, user, email, type, isClientLogin)
				this.props.history.push('/client/dashboard')
			} else {
				console.log('data: ', res.data)
			}
		})
		.catch(error => error)
	}

	handleRegister = () => {
		this.props.history.push('/client/register')
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<ClientHeader />
				<Grid container spacing={24}>
					<Grid item xs={1} sm={3} />
					<Grid item xs={10} sm={6} >
					<Card className={classes.root}>
						<CardContent className={classes.middle}>
							<FormControl className={classNames(classes.margin, classes.textField)} required>
								<List>
									<TextField
										id="username-input"
										label="Username"
										className={classes.usernameHolder}
										value={this.state.username}
										onChange={this.handleChange('username')}
										margin="normal"
									/>
									<FormHelperText id="name-error-text">{this.state.usernameError}</FormHelperText>
								</List>
								<List>
									<TextField
										id="password-input"
										label="Password"
										className={classes.usernameHolder}
										value={this.state.password}
										onChange={this.handleChange('password')}
										type="password"
										autoComplete="current-password"
										margin="normal"
									/>
									<FormHelperText id="name-error-text">{this.state.passwordError}</FormHelperText>
								</List>
							</FormControl>
							<CardActions>
								<Button size="large" fullWidth color="secondary" onClick={this.handleLogin}>Login</Button>
							</CardActions>
							<CardActions>
								<Button size="large" fullWidth color="secondary" onClick={this.handleRegister}>Register</Button>
							</CardActions>
						</CardContent>
					</Card>
					</Grid>
					<Grid item xs={1} sm={3} />
				</Grid>
			</div>
		)
	}
}

ClientLogin.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(clientLoginStyles)(ClientLogin)
