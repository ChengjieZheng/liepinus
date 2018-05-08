import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import { AppState } from '../../store/app-state'
import Container from '../layout/container'
import topicListStyles from './topic-list-style'


// 植入pops上的obj数据名，并使用observer监听
@inject('appState') @observer

class TopicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

		}
    this.changeName = this.changeName.bind(this)
	}

  componentDidMount() {
    // do something here
	}

	asyncBootstrap() {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.props.appState.count = 3
				resolve(true)
			})
		})
	}

  changeName(e) {
		// 可以使用如下方法改变props中所需要的值，但并不推荐
		// this.props.appState.name = e.target.value
		// 使用Action可记录下改变props的操作，比较安全
		this.props.appState.changeName(e.target.value)
	}

  render() {
		const { classes } = this.props
    return (
      <Container>
				<Helmet>
					<title>This is topic list</title>
					<meta name="description" content="This is description" />
				</Helmet>
				<Button raised="true" color="primary">This is a button</Button>
				<input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
				<div className={classes.divSize}>
					<p className={classes.fontP}>CSS test</p>
				</div>
      </Container>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(topicListStyles)(TopicList)
