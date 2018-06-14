import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// material-ui components
import List, { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui';
import footerStyle from './fooder-styles'
import AddressDialog from '../map/address-dialog'


class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<div>
					<AddressDialog />
				</div>
				<div className={classes.footerSetting}>
					<Grid container spacing={24}>
						<Grid item xs={12} sm={6}>
							<article>
								<Grid container spacing={24}>
									<Grid item sm={1} />
									<Grid item sm={10}>
										<List component="nav">
											<ListItem>
												<article>
													TERM
												</article>
											</ListItem>
											<Divider />
											<ListItem divider>
												<article>
													<Link to="/about/terms/">
														TERMS OF USE
													</Link>
												</article>
											</ListItem>
											<ListItem>
												<article>
													<Link to="/about/policy">
														PRIVACY POLICY
													</Link>
												</article>
											</ListItem>
											<Divider light />
											<ListItem>
												<article>
													ALL RIGHTS RESERVED © 2017 LIEPIN NORTH AMERICA, INC.
												</article>
											</ListItem>
										</List>
									</Grid>
									<Grid item sm={1} />
								</Grid>
							</article>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container spacing={24}>
								<Grid item sm={11}>
									<article>
										<p>
											CONTACT & INFO
										</p>
									</article>
								</Grid>
								<Grid item sm={1} />
							</Grid>
						</Grid>
					</Grid>
				</div>
			</div>

		)
	}
}

Footer.propTypes = {
  classes: PropTypes.bool.isRequired,
};

export default withStyles(footerStyle)(Footer)
