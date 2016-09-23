import React, { Component } from 'react'


export default class Repo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Repo">
        <h2>{this.props.params.repoName}</h2>
        <p>User: {this.props.params.userName}</p>
      </div>
    )
  }
}
