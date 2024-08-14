import React, { Component } from 'react';
import Header from '../../components/common/Header';
import withRouter from '../../withRouter';
import { inject, observer } from 'mobx-react';
class Home extends Component {
  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}

export default withRouter(inject("AuthStore")(observer(Home)));