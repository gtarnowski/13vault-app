import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

const PrimaryBlockButton = ({ label = '', onClick, disabled = false, children, busy, icon, selected }) => {
  let className = 'btn btn-block squared-border ripple-button'
  if (disabled) {
    className += ' disabled'
  }

  className += selected ? ' btn-primary' : ' btn-outline-primary'

  const onOverrideClick = e => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }
  return (
    <button
      type="submit"
      onClick={onOverrideClick}
      className={className}
    >
      { busy
        ? <FontAwesomeIcon icon={faSpinner} spin />
        : (icon && <FontAwesomeIcon icon={icon} />)
      } {label} {children} </button>
  )
}

export default PrimaryBlockButton
