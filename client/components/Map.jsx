import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { fetchFourSquare, fetchSavedPlaces, addSavedPlace as savePlace } from '../actions'
import SavedPlaces from './SavedPlaces'

// import {formatRelative} from "date-fns"

// Map Constants
const libraries = ['places']
const mapContainerStyle = {
  width: '50vw',
  height: '90vh'
}

const options = {
  zoomControl: true
}

function Map(props) {
  const [interest, setInterest] = useState('coffee') //The interest you selected
  const [clickedPlace, setClickedPlace] = useState('') // The place you just clicked
  const [city, setCity] = useState('Auckland') // City where the map will search places around
  const [latLng, setLatLng] = useState({ lat: -36.848461, lng: 174.763336 }) // Coorinate where the map will search places around

  const [state, setState] = useState({
    interest: 'coffee',
    clickedPlace: '',
    city: 'city',
    latLng: { lat: -36.848461, lng: 174.763336 },
  })

  useEffect(() => {
    if (!city) {
      props.dispatch(fetchFourSquare(latLng, interest))
    } else {
      props.dispatch(fetchFourSquare(city, interest))
    }
    props.dispatch(fetchSavedPlaces())
  }, [city, latLng, interest])

  const getPosition = () => {
    if (navigator.geolocation) {
      setCity('')
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('Your browser does not support Geo location.')
    }
  }

  const getCoordinates = (position) => {
    useState({
      ...state,
      latLng: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  const saveHandler = () => {
    props.dispatch(savePlace(state.clickedPlace.name, state.clickedPlace.address));
    props.dispatch(fetchSavedPlaces());
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
    panMap(e.target.value);
  }

  const handleInterestChange = (e) => {
    setState({ ...state, interest: e.target.value });
  }

  const panMap = (pos) => {
    if (pos === 'Wellington') {
      useState({ ...state, latLng: { lat: -41.28664, lng: 174.77557 } });
    } else if (pos === 'Christchurch') {
      useState({ ...state, latLng: { lat: -43.525650, lng: 172.639847 } });
    } else if (pos === 'Melbourne') {
      useState({ ...state, latLng: { lat: -37.813629, lng: 144.963058 } });
    } else if (pos === 'Auckland') {
      useState({ ...state, latLng: { lat: -36.848461, lng: 174.763336 } });
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4',
    libraries
  });

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className='interface'>
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
                setState({
                  ...state,
                  clickedPlace:
                  {
                    id: markedPlace.id,
                    name: markedPlace.name,
                    location: markedPlace.location,
                    address: markedPlace.location.formattedAddress.join(', ')
                  }
                });
              }}
            />
          ))}
          {state.clickedPlace ? (
            <InfoWindow
              position={{
                lat: state.clickedPlace.location.lat,
                lng: state.clickedPlace.location.lng
              }}
              onCloseClick={() => {
                setState({ ...state, clickedPlace: '' });
              }}
            >
              <div className='infoWindow'>
                <h2>{state.clickedPlace.name}</h2>
                <h2>{state.clickedPlace.location.formattedAddress.join(', ')}</h2>

                {
                  props.savedPlaces.some(el => el.address === state.clickedPlace.address) ? <h3>Already Saved</h3> : <button onClick={saveHandler} >Save</button>}

              </div>

            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
      <SavedPlaces />
    </div>
  )
}

function mapStateToProps(globalState) {
  const places = globalState.places.map(el => el.venue)
  const savedPlaces = globalState.savedPlaces
  return {
    places,
    savedPlaces
  }
}

export default connect(mapStateToProps)(Map)
