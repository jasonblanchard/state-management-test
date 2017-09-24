import React, { Component } from 'react';
import selectors from './selectors';

export default class CatPage extends Component {
  componentDidMount() {
    this.props.setSelectedCatId(this.props.match.params.id);
    this.props.getCat(this.props.match.params.id);
  }

  render() {
    const cat = selectors.getSelectedCat(this.props.appState);
    if (!cat) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        Cat {cat.id}
        <ul>
          <li>
            Name: {cat.name}
          </li>
        </ul>
        <img src={cat.imageUrl} alt={cat.name} />
      </div>
    );
  }
}
