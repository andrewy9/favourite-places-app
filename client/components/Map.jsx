import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { fetchFourSquare, fetchFruits, addSavedPlace as savePlace } from '../actions'

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
  const [interest, setInterest] = useState('coffee') //The interest you selected
  const [clickedPlace, setClickedPlace] = useState('') // The place you just clicked
  const [city, setCity] = useState('Auckland') // City where the map will search places around
  const [latLng, setLatLng] = useState({ lat: -36.848461, lng: 174.763336 }) // Coorinate where the map will search places around

  useEffect(() => {
    if (!city) {
      props.dispatch(fetchFourSquare(latLng, interest))
    } else {
      props.dispatch(fetchFourSquare(city, interest))
    }
    props.dispatch(fetchFruits())
  }, [city, latLng, interest])

  const getPosition = () => {
    if (navigator.geolocation) {
      setCity('')
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('Your browser does not support Geo location.')
    }
  }

  const saveHandler = () => {
    const savedPlaceName = clickedPlace.name
    const savedPlaceAddress = clickedPlace.location.formattedAddress.join(', ')
    props.dispatch(savePlace(savedPlaceName, savedPlaceAddress))
  }

  const getCoordinates = (position) => {
    setLatLng({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  const handleCityChange = (e) => {
    setCity(e.target.value)
    panMap(e.target.value)
  }

  const test = () => {
    if (props.newPlace.exists === clickedPlace.location.formattedAddress.join(', ')) {
      return <h2>Already Saved</h2>
    } else if (props.newPlace.exists !== clickedPlace.location.formattedAddress.join(', ')) {
      return <h2>Saved</h2>
    }
  }

  const panMap = (pos) => {
    if (pos === 'Wellington') {
      setLatLng({ lat: -41.28664, lng: 174.77557 });
    } else if (pos === 'Christchurch') {
      setLatLng({ lat: -43.525650, lng: 172.639847 });
    } else if (pos === 'Melbourne') {
      setLatLng({ lat: -37.813629, lng: 144.963058 });
    } else if (pos === 'Auckland') {
      setLatLng({ lat: -36.848461, lng: 174.763336 });
    }
  }

  const handleInterestChange = (e) => {
    setInterest(e.target.value)
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4',
    libraries
  });

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <h1>Favourite Places</h1>
      <button onClick={getPosition}>Current Location</button>
      <form>
        <div className="dropdown">
          <label className="dropbtn">you are in...</label>

          <select className="dropdown-content" name='citySelector' onChange={handleCityChange}>
            <option value='Auckland'>auckland</option>
            <option value='Wellington'>wellington</option>
            <option value='Christchurch'>christchurch</option>
            <option value='Melbourne'>melbourne</option>
          </select>
        </div>
      </form>
      <form>
        <div className="dropdown">
          <label className="dropbtn">you are looking for...</label>
          <select className="dropdown-content" name='interestSelector' onChange={handleInterestChange}>
            <option value='coffee'>coffee</option>
            <option value='food'>food</option>
            <option value='shops'>shops</option>
            <option value='outdoors'>outdoors</option>
            <option value='sights'>sights</option>
            <option value='trending'>trending</option>
          </select>
        </div>
      </form>
      {console.log('rendered page')}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={latLng}
        options={options}
      >
        {props.places.map(markedPlace => (
          <Marker
            key={markedPlace.id}
            position={{ lat: markedPlace.location.lat, lng: markedPlace.location.lng }}
            onClick={() => {
              setClickedPlace(markedPlace);
            }}
          />
        ))}
        {clickedPlace ? (
          <InfoWindow
            position={{
              lat: clickedPlace.location.lat,
              lng: clickedPlace.location.lng
            }}
            onCloseClick={() => {
              setClickedPlace('');
            }}
          >
            <div className='infoWindow'>
              <h2>{clickedPlace.name}</h2>
              <h2>{clickedPlace.location.formattedAddress.join(', ')}</h2>
              <button onClick={saveHandler} >Save</button>
              {/* {props.newPlace.exists === clickedPlace.location.formattedAddress.join(', ') ? <h2>Already Saved</h2> : null} */}
              {test()}
            </div>

          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}

function mapStateToProps(globalState) {
  const places = globalState.places.map(el => el.venue)
  const newPlace = globalState.newPlace
  return {
    places,
    newPlace
  }
}

export default connect(mapStateToProps)(Map)
