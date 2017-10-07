import React, { Component } from 'react';

export default class CatPage extends Component {
  componentDidMount() {
    this.props.setSelectedCatId(this.props.match.params.id);
    this.props.fetchCat(this.props.match.params.id);
  }

  render() {
    const cat = this.props.cat
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
