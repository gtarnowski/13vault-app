import React, {Component, Fragment} from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'
import ReactDOM from 'react-dom'
// import './index.css'

import 'draft-js/dist/Draft.css';

class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
  }

  onChange = (editorState) => this.setState({editorState})
  makeBold = () => this.onChange(RichUtils.toggleInlineStyle(
    this.state.editorState,
    'BOLD'
  ))
  render () {
    return (
      <Fragment>
        <button onClick={this.makeBold}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}
export default Edit
