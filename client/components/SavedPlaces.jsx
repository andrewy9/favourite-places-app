import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function SavedPlaces(props) {
  return (
    <h1>test</h1>
  )
}

function mapStateToProps(globalState) {
  console.log(globalState)
  return {
    globalState
  }
}

export default connect(mapStateToProps)(SavedPlaces)