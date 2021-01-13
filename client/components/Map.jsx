import React from 'react'
// import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

// import {formatRelative} from "date-fns"

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}

const center = {
  lat: -36.848461,
  lng: 174.763336

}

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBh_FVhVkRrg3kXqR6FkWOO7K35RSzxVl4",
    libraries,
  });

  if (loadError) return "Error loading Maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <div>
      <h1>Map</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  )
}