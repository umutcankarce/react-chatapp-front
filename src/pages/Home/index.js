import React, { Component } from 'react';
import Header from '../../components/common/Header';
import withRouter from '../../withRouter';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}

export default withRouter(Home);