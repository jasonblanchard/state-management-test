import React, { Component } from 'react';
import selectors from './selectors';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  componentDidMount() {
    this.props.appActions.getCats();
  }

  render() {
    const cats = selectors.getCats(this.props.appState);

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
