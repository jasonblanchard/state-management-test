import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import CatPage from './CatPage';
import actions from './actions';
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
          <Route path="/home" render={props => <HomePage appState={this.state} getCats={actions.getCats.bind(null, this)} {...props} />} />
          <Route path="/cats/:id" render={props => <CatPage appState={this.state} setSelectedCatId={actions.setSelectedCatId.bind(null, this)} getCat={actions.getCat.bind(null, this)} {...props} />} />
        </div>
      </div>
    );
  }
}

export default App;
