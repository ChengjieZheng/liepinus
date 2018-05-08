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
import { observer, inject } from 'mobx-react'
import Avatar from 'material-ui/Avatar';

// material-ui-icons
import Menu from 'material-ui-icons/Menu'

// import routes and styles
import clientStatusRoutes from '../../../config/client-status-routes'
import headerStyles from './header-styles'
import { AppState } from '../../../store/app-state'
import americaFlag from '../../assets/img/America-flag.png'
import chineseFlag from '../../assets/img/chiese-flag.png'

@inject('appState') @observer

/* eslint-disable */
class ClientHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
		this.handleLangeChange = this.handleLangeChange.bind(this)
	}

	handleDrawerToggle() {
		this.setState({open: !this.state.open})
	}

	handleLangeChange() {
		this.props.appState.changeLanguage()
	}

  render() {
    const { classes } = this.props
    const listItem = (
				clientStatusRoutes.map((prop, key) => {
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
				})
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
						<List className={classes.list}>
							{listItem}
							<ListItem key="languageChange" className={classes.listItem}>
								<ListItemIcon className={classes.languageFlag}>
									{
										this.props.appState.language
										?
										<Avatar
											alt="America Flag"
											src={americaFlag}
											onClick={this.handleLangeChange}
										/>
										:
										<Avatar
											alt="Chinese Flag"
											src={chineseFlag}
											onClick={this.handleLangeChange}
										/>
									}
								</ListItemIcon>
							</ListItem>
						</List>
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
                {listItem}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}
/* eslint-enable */
ClientHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(headerStyles)(ClientHeader)
