import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { InfoWindow } from '@react-google-maps/api'
import { fetchFourSquare, fetchSavedPlaces, addSavedPlace as savePlace } from '../actions'

class MapInfoWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedPlace: props.clickedPlace
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derv: ', props.clickedPlace)
    console.log(state)
    if (props.clickedPlace != state && state != '') {
      console.log('der RUN: ', state)
      return ({ clickedPlace: props.clickedPlace })
    } else {
      console.log('did not run')
    }
  }

  render() {
    return (
      <div>
        {
          this.state.clickedPlace ? (
            <InfoWindow
              position={{
                lat: this.state.clickedPlace.location.lat,
                lng: this.state.clickedPlace.location.lng
              }}
              onCloseClick={() => {
                console.log('closedclik')
                this.setState({ clickedPlace: 'hello' });
              }}
            >
              <div className='infoWindow'>
                <h2>{this.state.clickedPlace.name}</h2>
                <h2>{this.state.clickedPlace.location.formattedAddress.join(', ')}</h2>
                {
                  this.props.savedPlaces.some(el => el.address === this.state.clickedPlace.address) ? <h3>Already Saved</h3> : <button  >Save</button>}

              </div>
            </InfoWindow>
          ) : null
        }
      </div >
    )
  }
}

function mapStateToProps(globalState) {
  const places = globalState.places.map(el => el.venue)
  const savedPlaces = globalState.savedPlaces
  return {
    places,
    savedPlaces
  }
}

export default connect(mapStateToProps)(MapInfoWindow)