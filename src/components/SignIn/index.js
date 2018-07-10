import React, { Component, Fragment } from 'react'
import { compose, withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import PrimaryBlockButton from '../PrimaryBlockButton'
import signInMutation from '../../mutations/signIn'
import { URLS } from '../../consts/urls'

import Input from '../Input'
import VaultTextLogo from '../VaultTextLogo'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt'
import './index.css'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: {
      username: '',
      password: ''
    },
    busy: false
  }

  formStructure = [
    {name: 'username'},
    {name: 'password', type: 'password'}
  ]

  onSubmit = () => {
    this.setState({ busy: true })
    const { history, mutate, client } = this.props

    mutate({ variables: this.state }).then(({ data: { signIn: {
      token,
      result: { success, reason }
    }}}) => {
      setTimeout(() => {
        this.setState({ busy: false })
        if (success) {
          window.localStorage.setItem('token', token)
          client.resetStore().then(
            () => {
              history.push(URLS.ADMIN_DASHBOARD)
            }
          )
        } else {
          this.setState({ errors: { password: reason.message } })
        }
      }, 930)
    })
  }

  onChange = e => {
    const name = e.target.dataset.name
    const value = e.target.value
    const state = {
      [name]: value,
      errors: this.state.errors
    }
    state[name] = value
    state.errors[name] = ''
    this.setState(state)
  }

  onKeyPress = e => {
    if (e.which === 13) {
      this.onSubmit()
    }
  }

  render () {
    const { errors, busy } = this.state
    return (
      <Fragment>
        <div className="SignIn">
          <nav>
            <FontAwesomeIcon icon={faCog} spin={busy}/>
          </nav>
          <header className="header">
            <VaultTextLogo />
          </header>
          <form>
            {this.formStructure.map(({ name, label, type, autoFocus }) => (
              <Input
                key={name}
                name={name}
                label={label}
                value={this.state[name]}
                error={errors[name]}
                onChange={this.onChange}
                type={type}
                autoFocus={autoFocus}
                onKeyPress={this.onKeyPress}
              />
            ))}
            <PrimaryBlockButton icon={faSignInAlt} busy={busy} disabled={errors.password} onClick={this.onSubmit}>
              Sign in
            </PrimaryBlockButton>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default compose(
  withRouter,
  signInMutation,
  withApollo
)(SignIn)
