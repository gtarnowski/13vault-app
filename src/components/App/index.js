import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {URLS} from '../../consts/urls'

// Components
import AdminPages from '../AdminPages'
import NewsPage from '../NewsPage'
import NewSingle from '../NewSingle'
import Header from '../Header'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Edit from '../Edit'
import Home from '../Home'
import Search from '../Search'
import Postapocalypse from '../Postapocalypse'
import PrivateRoute from '../PrivateRoute'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={URLS.HOME} component={Home} />
            <Route exact path={URLS.NEWS} component={NewsPage} />
            <Route exact path={URLS.NEWS_SINGLE} component={NewSingle} />
            <Route exact path={URLS.EDIT} component={Edit}/>
            <Route exact path={URLS.POST_CULTURE} component={Postapocalypse} />
            <Route exact path={URLS.SEARCH} component={Search}/>
            <Route exact path={URLS.SIGN_IN} component={SignIn}/>
            <PrivateRoute path={URLS.ADMIN} component={AdminPages} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
