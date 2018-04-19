import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// material-ui components
import withStyles from 'material-ui/styles/withStyles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Hidden from 'material-ui/Hidden'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import ListItem from 'material-ui/List/ListItem'
import ListItemIcon from 'material-ui/List/ListItemIcon'
import ListItemText from 'material-ui/List/ListItemText'

// material-ui-icons
import Menu from 'material-ui-icons/Menu'

// import routes and styles
import BusinessStatusRoutes from '../../../../config/business-status-routes'
import clientBusinessHeaderStyles from './client-business-header-styles'

/* eslint-disable */
class BusinessHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
	}
	handleDrawerToggle() {
		this.setState({open: !this.state.open})
	}
  render() {
    const { classes } = this.props
    const list = (
      <List className={classes.list}>
				{BusinessStatusRoutes.map((prop, key) => {
					if (prop.redirect) {
						return null
					}
					return (
						<ListItem key={key} className={classes.listItem}>
							<NavLink to={prop.path} className={classes.navLink}>
								<ListItemIcon className={classes.listItemIcon}>
									<prop.icon />
								</ListItemIcon>
								<ListItemText
									primary={prop.short}
									disableTypography={true}
									className={classes.listItemText}
								/>
							</NavLink>
						</ListItem>
					)
				})}
      </List>
    )
    return (
			<AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="#" className={classes.title}>
              Liepinus
            </Button>
          </div>
          <Hidden smDown implementation="css">
            {list}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.sidebarButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Hidden mdUp implementation="css">
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor="right"
                open={this.state.open}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {list}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}
/* eslint-enable */
BusinessHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(clientBusinessHeaderStyles)(BusinessHeader)
