import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {URLS} from '../../consts/urls'

// Components
import NewsPage from '../NewsPage'
import NewSingle from '../NewSingle'
import Header from '../Header'
import NotFound from '../NotFound'
import Edit from '../Edit'
import Home from '../Home'
import Search from '../Search'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="Content">
            <Switch>
              <Route exact path={URLS.HOME} component={Home} />
              <Route exact path={URLS.NEWS} component={NewsPage} />
              <Route exact path={URLS.NEWS_SINGLE} component={NewSingle} />
              <Route exact path={URLS.EDIT} component={Edit}/>
              <Route exact path={URLS.SEARCH} component={Search}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
