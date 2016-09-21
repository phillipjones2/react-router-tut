import React from 'react'
import { Link, IndexLink } from 'react-router'
import style from './App.styl'
import '../styles/reset.styl'

import NavLink from './NavLink'
import Home from './Home'


export default React.createClass({
  render() {
    return (
      <div >
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
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})
