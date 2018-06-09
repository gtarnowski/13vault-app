import React from 'react'
import './index.css'
import './Spinner.css'

const Spinner = () => (
  <div className="SpinnerLoaderContainer">
    <svg viewBox="0 0 50 50" className="spinner">
      <circle className="ring" cx="25" cy="25" r="22.5" />
      <circle className="line" cx="25" cy="25" r="22.5" />
    </svg>
  </div>
)
export default Spinner