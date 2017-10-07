import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import React, { Component } from 'react';

import actions from './actions';
import bindMethods from './bindMethods';
import CatPage from './CatPage';
import HomePage from './HomePage';
import selectors from './selectors';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = props.initialState;

    this.actions = bindMethods(this, actions);
    this.selectors = bindMethods(this, selectors);
  }

  componentWillReceiveProps(nextProps) {
    // Can/should we merge in the new state?
    // Can we leverage this to push in changes from outside the component hierarchy?
    // Or is `props.initialState` truly just initial state when the component mounts?
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
          <Route path="/home" render={props => <HomePage {...props} cats={this.selectors.getCats()} fetchCats={this.actions.fetchCats} />} />
          <Route path="/cats/:id" render={props => <CatPage {...props} cat={this.selectors.getSelectedCat()} setSelectedCatId={this.actions.setSelectedCatId} fetchCat={this.actions.fetchCat} /> } />
        </div>
      </div>
    );
  }
}

export default App;
