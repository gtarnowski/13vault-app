import React from 'react'
import {storiesOf} from '@storybook/react'
import Input from './index'
import './index.css'

storiesOf('Input', module)
  .add('standard', () => (
    <Input
      field="email"
      label="Your email"
      value=""
    />
  ))
  .add('filled', () => (
    <Input
      field="email"
      label="Your email"
      value="test@test.com"
    />
  ))
  .add('error', () => (
    <Input
      field="email"
      label="Your email"
      error="Invalid email format"
      value="test"
    />
  ))
