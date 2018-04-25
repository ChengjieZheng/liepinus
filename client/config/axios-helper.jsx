import axios from 'axios'

const axiosHelper = {
	axiosClientRegister: (clientName, clientPwd, clientEmail, userType) => {
		return axios.post('/api/user/register', {
			user: clientName,
			pwd: clientPwd,
			email: clientEmail,
			type: userType,
		})
		.then(res => res.data)
		.catch(error => error)
	},

	axiosClientLogin: (clientName, clientPassword) => {
		return axios.post('/api/user/login', {
			user: clientName,
			pwd: clientPassword,
		})
		.then(res => res.data)
		.catch(error => error)
	},
}

export default axiosHelper
