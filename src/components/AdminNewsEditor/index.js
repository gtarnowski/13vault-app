import React, {Component} from 'react'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Editor from 'react-medium-editor';
import './index.css'

class AdminNewsEditor extends Component {
  state = {
  }

  options = {
    disableDoubleReturn: false,
    disableExtraSpaces: false,
    placeholder: {
      text: 'Napisz coś tutaj'
    },
    toolbar: {
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']
    },
    anchor: {
      /* These are the default options for anchor form,
         if nothing is passed this is what it used */
      linkValidation: true,
      placeholderText: 'Wklej lub wpisz link'
    }
  }

  onChange = (text, medium) => this.setState({ text: text });
  render () {
    return (
      <div className="AdminNewsEditor">
        <Editor
          text={this.state.text}
          onChange={this.onChange}
          options={this.options}
        />
      </div>
    )
  }
}

export default AdminNewsEditor
