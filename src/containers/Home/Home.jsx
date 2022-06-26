import React, { Component, Fragment, lazy } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import MyFooter from '../../components/MyFooter/MyFooter';

const VariousMenu = lazy(() =>
  import('../../components/VariousMenu/VariousMenu')
);
const CustomerTalks = lazy(() =>
  import('../../components/CustomerTalks/CustomerTalks')
);
const BannerPromotion = lazy(() =>
  import('../../components/BannerPromotion/BannerPromotion')
);

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <img
            className="background-jumbotron"
            src="./img/Background-desktop.svg"
            alt="background mobile 1"
          />
          <Navbar />
          <Jumbotron />
        </header>

        <main>
          <VariousMenu />
          <CustomerTalks />
          <BannerPromotion />
        </main>

        <footer>
          <MyFooter />
        </footer>
      </Fragment>
    );
  }
}

export default Home;
