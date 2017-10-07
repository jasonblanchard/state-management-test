import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

export default class AuthenticatedRoute extends Component {
  render() {
    const { render, authenticatedUserId, ...rest } = this.props;

    return (
      <Route {...rest} render={authenticatedUserId ? render : () => <Redirect to='/' />} />
    )
  }
}
