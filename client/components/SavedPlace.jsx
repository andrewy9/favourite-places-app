import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeSavedPlace } from "../actions/index";

function SavedPlace(props) {

  const deleteHandler = () => {
    console.log(props.place.id)
    props.dispatch(removeSavedPlace(props.place.id))
  }

  return (
    <div key={props.place.name} className='savedPlace'>
      {props.place.name} <br />
      {props.place.address} <br />
      <button onClick={deleteHandler}>Delete</button>
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

export default connect(mapStateToProps)(SavedPlace)