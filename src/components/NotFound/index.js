import React from 'react'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import './index.css'

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>
        <FontIcon icon={faCog} />
        404
      </h1>
      <h3>Strony nie odnaleziono</h3>

      <span>
        Do terminala podano błędny lub przestarzały adress <i>url</i>.
          <br />
          Spróbuj ponownie bądź skontaktuj się z serwisem
          <br/>
          <strong>13 Schronu</strong>
      </span>
        <hr />
    </div>
  )
}

export default NotFound
