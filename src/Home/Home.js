import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome! This is where you can keep all your to-dos.</h2>
        <Link to='/auth'><p>Login</p></Link>
      </div>
    )
  }
}
