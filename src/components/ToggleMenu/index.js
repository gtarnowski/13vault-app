import React from 'react'
import './index.css'

const ToggleMenu = ({ open, onOpen, dark }) => {
  return (
    <button className="ToggleMenu" data-open={open} onClick={onOpen} data-dark={dark}>
      <span className="bar-top" />
      <span className="bar-mid" />
      <span className="bar-bot" />
    </button>
  )
}

export default ToggleMenu
