import React from 'react'

import AboutBody from '../components/about/about'
import Header from '../components/header/header'
import BusinessFooter from '../components/footer/footer'

class About extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<AboutBody />
				<BusinessFooter />
			</div>
		)
	}
}

export default About
