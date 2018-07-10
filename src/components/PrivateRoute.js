import React from 'react'

import {
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      window.localStorage.getItem('token') ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/sign-in',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}

export default PrivateRoute
