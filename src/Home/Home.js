import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2 className="welcome">Welcome! 
        <br />
        This is where you can keep all your to-dos.</h2>
        <Link className="login" to='/auth'><p>Login</p></Link>
      </div>
    )
  }
}
