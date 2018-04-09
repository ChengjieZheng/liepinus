import React from 'react'
import Helmet from 'react-helmet'

export default class TopicList extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <div>
				<Helmet>
					<title>This is topic details</title>
					<meta name="description" content="This is details" />
				</Helmet>
				<article>
					<h1>This is topic detail</h1>
					<h1>This is topic detail</h1>
					<h1>This is topic detail</h1>
					<h1>This is topic detail!!</h1>
				</article>
      </div>
    )
  }
}
