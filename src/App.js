import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import CatPage from './CatPage';
import actions from './actions';
import './App.css';

function connectToAppState(context, Page, props = {}, actions = {}) {
  const boundActions = Object.keys(actions).reduce((boundActions, action) => {
    boundActions[action] = actions[action].bind(context);
    return boundActions;
  }, {});

  return <Page appState={context.state} appActions={boundActions} {...props} />
}

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
          <Route path="/home" render={props => connectToAppState(this, HomePage, props, { getCats: actions.getCats }) } />
          <Route path="/cats/:id" render={props => connectToAppState(this, CatPage, props, { setSelectedCatId: actions.setSelectedCatId, getCat: actions.getCat })} />
        </div>
      </div>
    );
  }
}

export default App;
