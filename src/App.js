import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import CatPage from './CatPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
          </ul>
        </nav>
        <div role="main">
          <Route path="/home" component={() => (<HomePage />)} />
          <Route path="/cats/:id" component={CatPage} />
        </div>
      </div>
    );
  }
}

export default App;
