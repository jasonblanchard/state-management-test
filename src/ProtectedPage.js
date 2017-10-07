import React, { Component } from 'react';

export default class ProtectedPage extends Component {
  render() {
    return (
      <div>
        <div>Protected route</div>
        <button onClick={this.props.logout}>logout</button>
      </div>
    )
  }
}
