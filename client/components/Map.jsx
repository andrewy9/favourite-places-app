import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { fetchFourSquare, fetchFruits } from '../actions'

// import {formatRelative} from "date-fns"

// Map Constants
const libraries = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}
const center = {
  lat: -36.848461,
  lng: 174.763336
}
const options = {
  zoomControl: true
}
const city = 'Auckland'

function Map(props) {
  const [place, setPlace] = useState('')
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()

  useEffect(() => {
    console.log('Map.useEffect: dispatching actions')
    props.dispatch(fetchFourSquare(city))
    props.dispatch(fetchFruits())
  }, [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4',
    libraries
  })

  if (loadError) return 'Error loading Maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div>
      <h1>Favourite Places</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  )
}

function mapStateToProps(globalState) {
  const places = globalState
  console.log('mapState: ', globalState)
  return {
    places,
  }
}

export default connect(mapStateToProps)(Map)