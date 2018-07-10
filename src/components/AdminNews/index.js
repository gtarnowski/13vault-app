import React, {Component} from 'react'

import AdminNewsEditor from '../AdminNewsEditor'
import './index.css'

class AdminNews extends Component {
  render () {
    return (
      <div className="AdminNews">
        <h2>Nowy News</h2>
        <hr />
        <AdminNewsEditor />
      </div>
    )
  }
}

export default AdminNews
