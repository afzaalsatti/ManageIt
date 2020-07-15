import React, { Component } from 'react'
import { render } from 'react-dom'
 import './html_editor.css'
import EmailEditor from 'react-email-editor'
 
export default class HtmlEditor extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return <div>
     
      <div>
        <button style={{background:"#007bff",height:"40px",width:"130px",color:"white",borderRadius:"7px",fontFamily:"poppins"}} onClick={this.exportHtml}>Export HTML</button>
      </div>
 
      <EmailEditor
        ref={editor => this.editor = editor}
      />
    </div>
  }
 
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
     this.props.getHtmlFromEditor(html)
    })
  }
}