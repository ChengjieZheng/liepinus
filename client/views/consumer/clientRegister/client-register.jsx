import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import List, { ListItem } from 'material-ui/List';

// 如果props里面没有history，则使用如下方法获得
// import { withRouter } from 'react-router-dom'
// @withRouter

import axios from 'axios'

import clientRegisterStyles from './client-register-styles'
import ClientHeader from '../../components/header/client-business-header/client-header'

class ClientRegister extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// username: '',
			password: '',
			showPassword: false,
		}
	}

	componentDidMount() {
		// axios.get('/api/user/test')
		// .then(res => console.log('1', res.data))
		// .catch(error => console.log(error))
		axios.get('/api/user/hello')
		.then(res => console.log('2', res.data))
		.catch(error => console.log(error))
		console.log(this.props.history)
	}

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
	};

	handleSubmit = () => {
		axios.post('/api/user/register', {
			user: 'test02',
			pwd: this.state.password,
			type: 'client',
		})
		.then(res => {
			if (res.status === 200 && res.data.code === 0) {
				console.log('data from server: ', res.data)
				console.log('success')
			} else {
				console.log('error')
			}
		})
		.catch(error => error)
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<ClientHeader />
				<Card className={classes.root}>
					<CardContent className={classes.middle}>
						<FormControl className={classNames(classes.margin, classes.textField)}>
							<InputLabel htmlFor="adornment-password">password</InputLabel>
							<Input
								id="adornment-password"
								type={this.state.showPassword ? 'text' : 'password'}
								value={this.state.password}
								onChange={this.handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="Toggle password visibility"
											onClick={this.handleClickShowPassword}
											onMouseDown={this.handleMouseDownPassword}
										>
											{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<CardActions>
							<Button size="large" fullWidth color="secondary" onClick={this.handleSubmit}>Submit</Button>
						</CardActions>
					</CardContent>
				</Card>
			</div>
		)
	}
}

ClientRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(clientRegisterStyles)(ClientRegister)

// onChange={v => this.handlechange('user', v)}
