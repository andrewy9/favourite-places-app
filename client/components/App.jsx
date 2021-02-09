import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Map from './Map'
import SavedPlaces from './SavedPlaces'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Map} />
          <Route path='/SavedPlaces' component={SavedPlaces} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(globalState) {
  const places = globalState
  return {
    places
  }
}

export default connect(mapStateToProps)(App)
