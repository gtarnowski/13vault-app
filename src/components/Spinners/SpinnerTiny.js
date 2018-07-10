import React from 'react'
import './Spinner.css'

const SpinnerTiny = () => (
  <div className="TinySpinnerLoaderContainer">
    <svg viewBox="0 0 50 50" className="spinner tiny">
      <circle className="ring" cx="25" cy="25" r="22.5" />
      <circle className="line" cx="25" cy="25" r="22.5" />
    </svg>
  </div>
)

export default SpinnerTiny
