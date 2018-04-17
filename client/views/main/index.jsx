import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

// material-ui components
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button';

import MainStyles from './main-style'
import bgImage from '../../views/assets/img/register.jpg'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { classes } = this.props
		return (
			<section
				className={classes.fullPageBackground}
				style={{ backgroundImage: 'url(' + bgImage + ')' }}
			>
				<article className={classes.topicWord}>
					<h1
						className={classes.centerWord}
						style={{ marginTop: '-200px' }}
					>掌握机会&nbsp;&nbsp;成就非凡
					</h1>
					<h2 className={classes.centerWord}>LIEPIN&nbsp;&nbsp;NORTH&nbsp;&nbsp;AMERICA</h2>
					<div className={classes.centerButton}>
						<NavLink to="/about" className={classes.textDecoration}>
							<Button variant="raised" size="large" color="secondary" className={classes.button}>
								client
							</Button>
						</NavLink>
						<NavLink to="/about" className={classes.textDecoration}>
							<Button variant="raised" size="large" color="primary" className={classes.button}>
								Business
							</Button>
						</NavLink>
					</div>
				</article>
			</section>
		)
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(MainStyles)(Main)
