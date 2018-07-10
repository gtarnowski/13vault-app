import React from 'react'
import startCase from 'lodash/startCase'
import './index.css'

const Input = ({
  name,
  autoFocus,
  onChange,
  value,
  type,
  error,
  label,
  onKeyPress = () => {},
  style,
  disabled,
  placeholder,
  textarea = false
}) => {
  return (
    <div className="Input" data-error={!!error} style={style}>
      {textarea ? (
        <textarea
          disabled={disabled}
          onKeyPress={onKeyPress}
          placeholder={placeholder || startCase(label || name)}
          className="form-control"
          autoFocus={autoFocus}
          value={value}
          data-name={name}
          type={type}
          onChange={onChange}
          id={name}
        />
      ) : (
        <input
          disabled={disabled}
          onKeyPress={onKeyPress}
          placeholder={placeholder || startCase(label || name)}
          className="form-control"
          autoFocus={autoFocus}
          value={value}
          data-name={name}
          type={type}
          onChange={onChange}
          id={name}
        />
      )}
      <label
        htmlFor={name}
      >
        {startCase(label || name)}
      </label>
      {error && <small>{error}</small>}
    </div>
  )
}

export default Input
