import React, { Component, Fragment } from "react";
import { Header, Footer } from "../Components/Layout";
import Exercise from "../Components/Exercise";

import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise />
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Home);
