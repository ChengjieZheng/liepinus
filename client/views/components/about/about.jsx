import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import aboutStyle from './about-styles'

// import { Grow } from 'material-ui';

// import assets/img
import ceoImage from '../../assets/img/Eric.png'
import gmImage from '../../assets/img/BigBrother.png'
import cooImage from '../../assets/img/Haozhuan.png'
import cboImage from '../../assets/img/Grace.png'
import awardImage from '../../assets/img/Award.png'
import Footer from '../footer/footer'
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
		super(props);
		this.state = {
		}
	}

  handleClickOpen = () => {
		// console.log('call handleclickOpen state', this.state.open)
    this.setState({ open: true }, () => {
			console.log('call handleclickOpen state', this.state.open);
		});
  };

  handleClose = () => {
		// console.log('call handleclickOpen state', this.setState.open)
    this.setState({ open: false }, () => {
			console.log('call handleclickClose state', this.state.open);
		});
  };

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
										<article
											className={classes.passortPhoto}
											style={{ backgroundImage: 'url(' + ceoImage + ')' }}
										/>
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
										<article
											className={classes.passortPhoto}
											style={{ backgroundImage: 'url(' + gmImage + ')' }}
										/>
									</Grid>
								</ListItem>
								<Divider light />

								{/* 李豪颛, Chief Operating Officer */}
								<ListItem>
									<Grid item xs={6}>
										<article
											className={classes.passortPhoto}
											style={{ backgroundImage: 'url(' + cooImage + ')' }}
										/>
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
										<article
											className={classes.passortPhoto}
											style={{ backgroundImage: 'url(' + cboImage + ')' }}
										/>
									</Grid>
								</ListItem>
								<Divider light />

								{/* about 底部设计 */}
								<ListItem>
									<p>
										DEVELOPMENT EVENTS OF LIEPIN
									</p>
								</ListItem>
								<ListItem>
									<article>
										<p>
											2011/ 6/18 <br />
											Liepin.com officially launched <br />
											2013 <br />
											Global Career Development Center established <br />
											2015 <br />
											Launched "Quick Interview" and became the first trading closed-loop product in China's recruitment industry <br />
											2017 <br />
											Applied AI to match Job Seekers and Business Needs, Reduce Information Asymmetry and Reduce Recruitment Costs. <br />
											Subvert the traditional RPO(Recruitment Process Outsourcing). Online standardized operation reaches whole resources from Liepin.com, providing one-stop VIP recruitment services for enterprises <br />
										</p>
									</article>

									<div className={classes.divLine} />

									<article>
										<p>
											2012 <br />
											TongDao Q&A” managers forum officially launched <br />
											2014/12/23 <br />
											Liepin TongDao Upgraded to social APP <br />
											2016/01 <br />
											Established the North American branch, becoming the first recruitment company set up branch offices overseas. The only unicorn company in recruitment industry Valued $1 Billion in D Funding Round. <br />
										</p>
									</article>
								</ListItem>
								<ListItem>
										<article
											className={classes.awardPhoto}
											style={{ backgroundImage: 'url(' + awardImage + ')' }}
										/>
								</ListItem>
								<ListItem>
									<p>
										Liepin North America joined the China General Chamber of Commerce-USA (CGCC) and became a core member in 2016 <br />

										Dai kebin has been awarded the “Top ten person of human resources service in China in 2015” in 2015 <br />

										Liepin has been awarded the “deloitte high-tech development 50 strong in China” in 2015 <br />

										Dai kebin, the founder and CEO of Liepin, was named to fortune of the top ten “40 business elites under 40 in 2015 in China” in 2015 <br />

										Liepin awarded a top talent recruitment website leading brand in 2015 <br />

										Liepin has been awarded DoNews ear of awards “Best human resource service platform in Internet industry” in 2014 <br />

										Liepin has been awarded《Business Circles》magazine “ new prominent business model award in 2014” in 2014 <br />

										Liepin has been awarded the title of《Chinese Entrepreneurs》“The most growth-oriented emerging enterprises in 2014” in 2014 <br />

										Liepin has been awarded the title of《Beijing Business Today》“The most businesslike social network platform of the year” in 2013 <br />

										Liepin has been awarded the title of《21st Century business review》the best business model “the best talent recruitment website” in 2013 <br />

										Liepin has been awarded the title of《The Economic Observer Newspaper》“China’s most innovative enterprise” in 2013 <br />

										CYzone 100 in 2012: Liepin has been awarded “the top 100 of China’s annual innovation growth enterprise in 2012”; <br />
										Dai kebin, the founder and CEO of Liepin, has been awarded “the top 10 most growth CEOs in China in 2012” in CEO summit forum <br />

										The best model brand satisfied by the public in China’s high-end talent recruitment service in 2012 <br />

										The most competitive brand in China’s online recruitment industry in 2012 <br />

										Liepin was designated the official recruitment website by China Internet conference in 2012 <br />

										Deloitte-36Kr”tomorrow’s star” in 2012 <br />

										Liepin has been awarded the title of “best high-end talent recruitment website in China in 2011” in 2011 <br />

										Liepin was the online media support unit of the 8th China human capital management conference & China’s most happiness enterprise campaign, and as think tank and research support unit of 21st century business school competitive in 2010 <br />
								</p>
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

