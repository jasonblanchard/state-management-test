import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// May be send from server on the `window` object or whatever. At this point, it should be a POJO.
const initialAppState = {
  entities: {
    users: {
      '1' :{
        id: 1,
        name: 'Cats McGee'
      }
    }
  }
};

ReactDOM.render(<BrowserRouter><App initialState={initialAppState} /></BrowserRouter>, document.getElementById('root'));
