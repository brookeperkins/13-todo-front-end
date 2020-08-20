import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import AuthPage from './Auth/AuthPage.js';
import Home from './Home/Home.js'
import ToDo from './ToDo/ToDoPage.js'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from 'react-router-dom';
export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN'),
}
render() {
  return (
    <>
    <Router>
    <Header />
    <nav>
      <Link className="navLinks" to="/">Home</Link>
      <Link className="navLinks" to="/auth">Login</Link>
    </nav>
    <div className="main">
        <Switch>
            <Route 
                path="/" 
                exact
                render={(routerProps) => <Home {...routerProps} />} 
            />
            <Route 
                path="/auth" 
                exact
                render={(routerProps) => <AuthPage auth={this.handleAuth} {...routerProps} />} 
            />
            <Route 
                path="/list" 
                exact
                render={(routerProps) => <ToDo token={this.state.token} {...routerProps} />} 
            />
        </Switch>
        </div>
      <Footer />
    </Router>
</>
  )
}
}