import React, { Component } from 'react';
import actions from './actions';
import selectors from './selectors';

export default class CatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    actions.getCat(this, this.props.match.params.id);
  }

  render() {
    const cat = selectors.getSelectedCat(this.state);
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
