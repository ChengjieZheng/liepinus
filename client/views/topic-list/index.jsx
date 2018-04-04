import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { AppState } from '../../store/app-state'


// 植入pops上的obj数据名，并使用observer监听
@inject('appState') @observer

export default class TopicList extends React.Component {
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
    return (
      <div>
				<Helmet>
					<title>This is topic list</title>
					<meta name="description" content="This is description" />
				</Helmet>
				<input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
