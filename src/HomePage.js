import React, { Component } from 'react';
import actions from './actions';
import selectors from './selectors';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    actions.getCats(this);
  }

  render() {
    const cats = selectors.getCats(this.state);

    if (!cats) {
      return <div>loading...</div>
    }

    return (
      <div>
        <ul>
          {cats.map(this._renderCat, this)}
        </ul>
      </div>
    );
  }

  _renderCat(cat) {
    return (
      <li key={cat.id}>
        <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
      </li>
    )
  }
}
