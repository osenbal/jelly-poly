import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CustomerTalks.css';
// const ReviewComp = lazy(() => import('./ReviewComp/ReviewComp'));
import ReviewComp from './ReviewComp/ReviewComp';

const options = {
  loop: true,
  margin: 30,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
};

function CustomerTalks() {
  return (
    <div className="customer-review grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
      <img
        className="background-kuning2"
        src="./img/backgroundKuning.png"
        alt="background kuning"
      />
      <OwlCarousel className="owl-two" {...options}>
        <ReviewComp />
        <ReviewComp />
        <ReviewComp />
        <ReviewComp />
        <ReviewComp />
      </OwlCarousel>

      <div className="heading-comment xl:w-[70%] justify-self-end w-full text-right">
        <h2>
          <span>Customers</span> Talk
        </h2>
        <p>
          We always give our best to our customers with the best service and
          menu. Customer satisfies is Our happines
        </p>
      </div>
    </div>
  );
}

export default CustomerTalks;
