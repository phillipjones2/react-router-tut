import React, { Component } from 'react'
import NavLink from "./NavLink"

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav">
        <p>
          <NavLink to="/" onlyActiveOnIndex={true}>
            React Router Tutorial
          </NavLink>
        </p>
        <ul role="nav">
          <li>
            <NavLink to="/about" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Repos" >
              Repos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
