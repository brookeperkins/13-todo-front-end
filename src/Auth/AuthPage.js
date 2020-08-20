import React, { Component } from 'react'
import DisplaySignIn from './SignIn.js'
import DisplaySignUp from './SignUp.js'
import { 
  signUp,
  signIn
 } from '../to-do-api.js'

export default class AuthPage extends Component {

  state = {
    signIn: false,
    signUp: false,
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: ''
  }

  handleSignUp = async (e) => {
    e.preventDefault();

    const userData = await signUp({
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    })


    this.props.auth(userData.body.token)
    this.props.history.push('/ToDoPage')
  }

  handleSignIn = async (e) => {
    e.preventDefault();

    const userData = await signIn({
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })

    this.props.auth(userData.body.token)
    this.props.history.push('/ToDoPage')
  }

  displaySignIn = () => {
    this.setState({ signIn: true })
  }
  
  displaySignUp = () => {
    this.setState({ signUp: true })
  }

  handleSignUpEmail = (e) => {
    this.setState({ signUpEmail: e.target.value })
  }
  
  handleSignUpPassword = (e) => {
    this.setState({ signUpPassword: e.target.value })
  }
  
  handleSignInEmail = (e) => {
    this.setState({ signInEmail: e.target.value })
    console.log(this.state.signInEmail)
  }
  
  handleSignInPassword = (e) => {
    this.setState({ signInPassword: e.target.value })
    console.log(this.state.signInPassword)
  }

  render() {
    return (
      <div className="auth">
        <h2 onClick={this.displaySignIn}>Sign In</h2>
        <h2 onClick={this.displaySignUp}>Sign Up</h2>
        {
          this.state.signIn && <DisplaySignIn
          handleSignIn={this.handleSignIn}
          handleSignInEmail={this.handleSignInEmail}
          handleSignInPassword={this.handleSignInPassword} />
        }
        {
          this.state.signUp && <DisplaySignUp 
          handleSignUp={this.handleSignUp}
          handleSignUpEmail={this.handleSignUpEmail}
          handleSignUpPassword={this.handleSignUpPassword} />
        }
      </div>
    )
  }
}