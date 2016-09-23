import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../styles/reset.styl'
import style from './App.styl'

import Nav from './Nav'
import Home from './Home'


export default React.createClass({
  render() {
    return (
      <div >
        <Nav/>
        {this.props.children}
      </div>
    )
  }
})
