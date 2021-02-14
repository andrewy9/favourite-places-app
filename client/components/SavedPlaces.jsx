import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SavedPlace from './SavedPlace'

function SavedPlaces(props) {
  return (
    <div className='savedPlaces'>
      <h1>Saved Places</h1>
      <ul>
        {props.savedPlaces.map(el =>
          <li>
            <SavedPlace place={el} />
          </li>
        )}
      </ul>
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

export default connect(mapStateToProps)(SavedPlaces)