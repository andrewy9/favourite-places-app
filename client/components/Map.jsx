import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'

// import {formatRelative} from "date-fns"
import { getFourSquare } from '../apis/fourSquare'

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

export default function Map () {
  useEffect(() => {
    getFourSquare(city)
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
