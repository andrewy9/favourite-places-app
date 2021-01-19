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

const options = {
  zoomControl: true
}

function Map(props) {
  const [clickedPlace, setClickedPlace] = useState('') // The place you just clicked
  const [position, setPosition] = useState('Auckland') // City where the map will search places around
  const [latLng, setLatLng] = useState({ lat: -36.848461, lng: 174.763336 }) // Coorinate where the map will search places around

  useEffect(() => {
    if (!position) {
      props.dispatch(fetchFourSquare(latLng))
    } else {
      props.dispatch(fetchFourSquare(position))
    }
    props.dispatch(fetchFruits())
  }, [position, latLng])

  const getPosition = () => {
    if (navigator.geolocation) {
      setPosition('')
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('Your browser does not support Geo location.')
    }
  }

  const getCoordinates = (position) => {
    setLatLng({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  const handleChange = (e) => {
    setPosition(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (position === 'Wellington') {
      setLatLng({ lat: -41.28664, lng: 174.77557 })
    } else if (position === 'Christchurch') {
      setLatLng({ lat: -43.525650, lng: 172.639847 })
    } else if (position === 'Melbourne') {
      setLatLng({ lat: -37.813629, lng: 144.963058 })
    } else if (position === 'Auckland') {
      setLatLng({ lat: -36.848461, lng: 174.763336 })
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4',
    libraries
  })

  if (loadError) return 'Error loading Maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div>
      <h1>Favourite Places</h1>
      <button onClick={getPosition}>Current Location</button>
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <label className="dropbtn">you are in...</label>

          <select className="dropdown-content" name='citySelector' onChange={handleChange}>
            <option value='Auckland'>auckland</option>
            <option value='Wellington'>wellington</option>
            <option value='Christchurch'>christchurch</option>
            <option value='Melbourne'>melbourne</option>
          </select>
        </div>
        <button type='submit' className='submit'>
          submit
          </button>
      </form>
      {console.log('rendered page')}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={latLng}
        options={options}
      >
        {props.places.map(markedPlace => (
          <div>
            <Marker
              key={markedPlace.id}
              position={{ lat: markedPlace.location.lat, lng: markedPlace.location.lng }}
            />
          </div>
        ))}
      </GoogleMap>
    </div>
  )
}

function mapStateToProps(globalState) {
  const places = globalState.places.map(el => el.venue)
  return {
    places
  }
}

export default connect(mapStateToProps)(Map)
