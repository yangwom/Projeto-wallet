import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

import './App.css';

class App extends Component {
//  obrigado por mais um projeto maravilhoso trybe
  render() {
    return (

      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>

    );
  }
}

export default App;
