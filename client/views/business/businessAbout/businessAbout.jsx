import React from 'react'

import About from '../../components/about/about'
import BusinessHeader from '../../components/header/client-business-header/business-header'

class BusinessAbout extends React.Component {
	render() {
		return (
			<div>
				<BusinessHeader />
				<About />
			</div>
		)
	}
}

export default BusinessAbout
