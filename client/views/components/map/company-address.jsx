import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBlt3IIEfXfZrXoTQ-qVVbmw6dkp4eEQBw',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 42.3642348, lng: -71.0625842 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 42.3642348, lng: -71.0625842 }} onClick={props.onMarkerClick} />}
	</GoogleMap>))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

 export default MyFancyComponent
