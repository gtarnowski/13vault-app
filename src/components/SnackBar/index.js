import React from 'react'
import './index.css'

const SnackBar = ({ children, open }) => {
  return (
    <div className="SnackBar" data-open={open}>
      {children}
    </div>
  )
}

export default SnackBar
