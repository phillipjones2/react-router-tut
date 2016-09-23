import React from 'react'
import NavLink from './NavLink'


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
    console.log(document.getElementById("userName").value);
    document.getElementById("userName").value = ""
    document.getElementById("repo").value = ""
  },

  render() {
    return (
      <div className="ReposFrame">
        <div className="Repos">
          <h2>Repos</h2>
          <ul>
            <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
            <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          </ul>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input id="userName" type="text" placeholder="userName"/> / {' '} <br/>
              <input id="repo" type="text" placeholder="repo"/> {' '} <br/> 
              <button type="submit">Go</button>
            </form>
          </li>
        </div>
        {this.props.children}
      </div>
    )
  }
})
