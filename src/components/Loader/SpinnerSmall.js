import React from 'react'
import './Spinner.css'

const SpinnerSmall = () => (
  <div className="SmallSpinnerLoaderContainer">
    <svg viewBox="0 0 50 50" className="spinner small">
      <circle className="ring" cx="25" cy="25" r="22.5" />
      <circle className="line" cx="25" cy="25" r="22.5" />
    </svg>
  </div>
)

export default SpinnerSmall
