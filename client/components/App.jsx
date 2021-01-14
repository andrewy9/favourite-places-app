import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

import Map from './Map'

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFruits())
  }

  render() {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <Map />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  const places = globalState
  console.log(places)
  return {
    places,
  }
}

export default connect(mapStateToProps)(Map)