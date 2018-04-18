import React from 'react'
import { Route, Redirect } from 'react-router'

import Home from '../views/main/index'
import ClientHome from '../views/consumer/index'
import BusinessHome from '../views/business/index'
import BusinessAbout from '../views/business/businessAbout/businessAbout'

export default () => [
  <Route path="/" render={() => <Redirect to="/home" />} exact key="first" />,
  <Route path="/home" component={Home} key="home" />,
	<Route path="/client" component={ClientHome} key="client" />,
	<Route path="/business" component={BusinessHome} key="business" />,
	<Route path="/businessAbout" component={BusinessAbout} key="businessAbout" />,
]
