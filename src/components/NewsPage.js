import React, { Component } from 'react'
import News from './News'

class NewsPage extends Component {
  state = {
    page: 1
  }

  onPageChange = page => {
    this.setState({page})
  }

  render () {
    return (
      <News
        page={this.state.page}
        onPageChange={this.onPageChange}
      />
    )
  }
}

export default NewsPage
