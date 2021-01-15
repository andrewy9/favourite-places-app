import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'

export class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <Map />
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  const places = globalState
  return {
    places
  }
}

export default connect(mapStateToProps)(App)
