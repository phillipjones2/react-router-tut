import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div  className="Contact">
        <form id="gform" method="POST"
              action="https://script.google.com/macros/s/AKfycbxWXjR9E6G0l6om0gXc0ZEAme1D3avtfNZPBxK0TCuSUfIR_jVR/exec">
          <h1>to: Phillip Emerson Jones</h1>
          <div id="from">
            <label htmlFor="name">from:</label>
            <input type="text" id="name" name="user_name"></input>
          </div>
          <div id="reply">
            <label htmlFor="mail">reply:</label>
            <input type="email" id="mail" name="user_email"></input>
          </div>
          <div id="message">
            <label htmlFor="msg">Your message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </div>
          <div className="button">
            <button type="submit">Send your message</button>
          </div>
        </form>
        <div id="thankyou_message">
          <h1><em>Thanks</em></h1>
        </div>
        <div id="email-Invalid">
          <h1>Invalid E-mail Address!</h1>
        </div>
      </div>
    )
  }
}
