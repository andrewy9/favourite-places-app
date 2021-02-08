import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Map from './Map'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Map} />
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
