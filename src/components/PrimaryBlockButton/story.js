import React from 'react'
import {storiesOf} from '@storybook/react'
import PrimaryBlockButton from './index'

storiesOf('PrimaryBlockButton', module)
  .add('standard', () => <PrimaryBlockButton >Submit</PrimaryBlockButton>)
  .add('busy', () => <PrimaryBlockButton busy={true}>Submit</PrimaryBlockButton>)
  .add('disabled', () => <PrimaryBlockButton disabled={true}>Submit</PrimaryBlockButton>)
  .add('disabled and busy', () => <PrimaryBlockButton busy={true} disabled={true}>Submit</PrimaryBlockButton>)
  .add('with label without children', () => <PrimaryBlockButton label="Submit" />)
