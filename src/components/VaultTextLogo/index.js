import React from 'react'
import './index.css'

const VaultTextLogo = ({ short }) => {
  return (
    <h1 className="VaultTextLogo">
      13{!short && (<span>schron</span>)}
    </h1>
  )
}

export default VaultTextLogo
