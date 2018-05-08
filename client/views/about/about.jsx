import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import aboutStyle from './about-styles'
// import { Grow } from 'material-ui';


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

class About extends React.Component {
	constructor(props) {
			super(props)
			this.state = {

			}
			// this.changeName = this.changeName.bind(this) // 事件绑定，做到逻辑的时候会用
	}
	componentDidMount() {
		// do something here
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.divTop}>
				<Grid container spacing={24}>
					<Grid item xs={2}>
						<article className={classes.fontP}>xs</article>
					</Grid>
					<Grid item xs={8}>

						<div className={classes.root}>
							<List component="nav">
								<ListItem>
									<ListItemText primary="Our Team" />
								</ListItem>
								<Divider light />

								{/* 谢承润, Chief Executive Officer */}
								<ListItem>
									<Grid item xs={6}>
										<article>
											<p>dong</p>
										</article>
									</Grid>
									<Grid item xs={6}>
										<p>
											Graduated with a Finance degree from The Wharton School of University of Pennsylvania,
											Eric is currently the CEO of Liepin America,
											one of the most elite human resources platforms in the U.S. and the largest elite human resources platform in China.
											Born in Seattle, he attended primary school in Beijing,
											secondary school in Hong Kong, and university in the states.
											The constant travelling allowed him to adapt to various cultures,
											sand these experiences have shaped him into the person he is today.
										</p>
										<p>
											He founded the Penn Wharton China Summit during his freshmen year at Wharton,
											and this summit has become the largest student-organized summit in the states.
											More than 3,000 students from 35 states and over 84 cities visited Philadelphia for this summit in 2016 and 2017.
											He, then, founded the China Summit Foundation,
											a recognized NGO with the 501(c)(3) status towards to end of 2016 to help charities,
											forums, educational and cultural initiatives by International students from different schools.
										</p>
										<p>
											By the end of his junior year,
											Eric joined Liepin in hopes to help International students
											with their career back in China and served as the CEO of Liepin America upon his graduation in December 2017.
											He looks forward to excel further in his studies by joining the Schwarzman Scholars Program in 2018.
										</p>
									</Grid>
								</ListItem>
								<Divider light />

								{/* 俞国梁, Partner and General Manager */}
								<ListItem>
									<Grid item xs={6}>
										<p>
											Gary is Senior media person has long been engaged in media work including director of ACM TV Boston,
											CEO of Boston International media consulting , reporter of “World Journal ” .
										</p>
										<p>
											Gary arranged and created the Liepin North America branch. Since the beginning of 2016,
											Liepin North America has undertaken Changan Automobile Group ,
											Suning, Meili, Guangzhou Automobile Group,
											Chengdu Tianfu Software Park and many other companies’ overseas recruitment projects,
											sthrough which, 1000 high quality talents have met their career expectation and become the backbone force of overseas returnee talents.
										</p>
									</Grid>
									<Grid item xs={6}>
										<p>
											jieshao
										</p>
									</Grid>
								</ListItem>
								<Divider light />

								{/* 李豪颛, Chief Operating Officer */}
								<ListItem>
									<Grid item xs={6}>
										<article>
											<p>dong</p>
										</article>
									</Grid>
									<Grid item xs={6}>
										<p>
											Years of human resources innovation experiences in North America region
										</p>
										<p>
											Previously worked for State Street Corporation in Global Human Resource Department
										</p>
										<p>
											Advisory Board Member of Northeastern University Chinese Students and Scholars Association
										</p>
										<p>
											Voluntarily work in NECINA for 4 years, Previous Director of Marketing.
										</p>
										<p>
											Graduated from Northeastern University in Entrepreneurship & Supply Chain Management.
										</p>
									</Grid>
								</ListItem>
								<Divider light />

								{/* 姚婷, Chief Business Officer */}
								<ListItem>
									<Grid item xs={6}>
										<p>
											Grace Yao is the Chief Business Officer of Liepin North America,
											an elite career development platform.She also serves as a Director of NAAAP
											(National Association of Asian American Professionals).
										</p>
										<p>
											She has over 11 years of solid human resource experience serving Fortune Global 500 companies,
											specifically Accenture, IBM, Cisco, Google, Honeywell, EMC and Huawei.
											Before Liepin North America she was the HR Business Partner of Accenture with responsibility
											for managing more than 300 consulting employees’ life cycle activities
										</p>
									</Grid>
									<Grid item xs={6}>
										<p>
											jieshao
										</p>
									</Grid>
								</ListItem>
								<Divider light />
								<ListItem>
									<ListItemText primary="Spam" />
								</ListItem>
							</List>
						</div>


					</Grid>
					<Grid item xs={2}>
						<article className={classes.fontP}>xs</article>
					</Grid>
				</Grid>
			</div>
		);
	}
}


About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(aboutStyle)(About)

