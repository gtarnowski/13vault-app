import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Home from '../Home'
import Header from '../Header'
import NotFound from '../NotFound'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="Content">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
