import React from 'react'
import { Route, Redirect } from 'react-router'

import Home from '../views/main/index'
import ClientHome from '../views/consumer/index'
import ClientLogin from '../views/consumer/client-login/client-login'
import ClientRegister from '../views/consumer/client-register/client-register'
import ClientDashboard from '../views/consumer/client-dashboard/client-dashboard'
import BusinessHome from '../views/business/index'
import BusinessAbout from '../views/business/businessAbout/businessAbout'

export default () => [
  <Route path="/" render={() => <Redirect to="/home" />} exact key="first" />,
  <Route path="/home" exact component={Home} key="home" />,
	<Route path="/client" exact component={ClientHome} key="clientHome" />,
	<Route path="/client/login" exact component={ClientLogin} key="clientLogin" />,
	<Route path="/client/register" component={ClientRegister} exact key="clientRegister" />,
	<Route path="/client/dashboard" component={ClientDashboard} exact key="clientDashboard" />,
	<Route path="/business" component={BusinessHome} key="business" />,
	<Route path="/businessAbout" component={BusinessAbout} key="businessAbout" />,
]
