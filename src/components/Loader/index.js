import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle'
import './index.css'

const Loader = ({ loaderType, error }) => (
  <div className="Loader" data-loader={loaderType} data-error={!!error}>
    <FontAwesomeIcon
      icon={error ? faExclamationTriangle : faSpinner}
      spin={!error}
      size='3x'
    />
  </div>
)

export default Loader
