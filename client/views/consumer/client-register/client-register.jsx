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
import List from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
// import { observer, inject } from 'mobx-react'
// 如果props里面没有history，则使用如下方法获得
// import { withRouter } from 'react-router-dom'
// @withRouter

import clientRegisterStyles from './client-register-styles'
import ClientHeader from '../../components/header/client-business-header/client-header'
import axiosHelper from '../../../config/axios-helper'

// @inject('appState') @observer

class ClientRegister extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			usernameError: '',
			password: '',
			passwordError: '',
			email: '',
			emailError: '',
			errMsg: '',
			type: 'client', //eslint-disable-line
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
			emailError: '',
		}
		if (this.state.username.length < 5) {
			isError = true
			errors.usernameError = 'Username needs to be atleast 5 characters long'
		}
		if (this.state.password.length < 8) {
			isError = true
			errors.passwordError = 'Password needs to be atleast 8 characters long'
		}
		if (this.state.email.indexOf('@') === -1 || this.state.email.indexOf('.com') === -1) {
			isError = true
			errors.emailError = 'Email is not valid'
		}
		this.setState({
			...this.state,
			...errors,
		})

		return isError
	}

	handleSubmit = () => {
		const err = this.validate()
		if (!err) {
			this.setState({
				username: '',
				usernameError: '',
				password: '',
				passwordError: '',
				email: '',
				emailError: '',
				type: 'client', //eslint-disable-line
			})
			axiosHelper.axiosClientRegister(this.state.username, this.state.password, this.state.email, this.state.type)
			.then(clientLoginData => {
				if (clientLoginData.code === 1) {
					this.setState({ errMsg: clientLoginData.msg })
				} else if (clientLoginData === 0) {
					console.log('Register info: ', clientLoginData.data)
					console.log('Register success!')
				}
			})
		}
		// axios.post('/api/user/register', {
		// 	user: this.state.username,
		// 	pwd: this.state.password,
		// 	email: this.state.email,
		// 	type: this.state.type,
		// })
		// .then(res => {
		// 	if (res.status === 200 && res.data.code === 0) {
		// 		console.log('data from server: ', res.data)
		// 		console.log('success')
		// 	} else {
		// 		console.log('error')
		// 	}
		// })
		// .catch(error => error)
	}

	handleLogin = () => {
		this.props.history.push('/client/login')
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
								<List>
									<TextField
										id="email-input"
										label="Email"
										className={classes.usernameHolder}
										value={this.state.email}
										onChange={this.handleChange('email')}
										type="email"
										margin="normal"
									/>
									<FormHelperText id="name-error-text">{this.state.emailError}</FormHelperText>
								</List>
								<List>
									<Typography className={classes.errMsg}>
										{this.state.errMsg}
									</Typography>
								</List>
							</FormControl>
							<CardActions>
								<Button size="large" fullWidth color="secondary" onClick={this.handleSubmit}>Register</Button>
							</CardActions>
							<CardActions>
								<Button size="large" fullWidth color="secondary" onClick={this.handleLogin}>login</Button>
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

ClientRegister.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(clientRegisterStyles)(ClientRegister)

// onChange={v => this.handlechange('user', v)}
