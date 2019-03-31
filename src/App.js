import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './components/withAuth';
import Home from './components/Home'
import Secret from './components/Secret'
import SignUp from './components/SignUp'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
          </div>
          <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/secret">Secret</Link></li>
                <li ><Link to="/login">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;