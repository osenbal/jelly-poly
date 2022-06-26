import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BannerPromotion.css';

const options = {
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

function BannerPromotion() {
  return (
    <div className="banner-promotion">
      <OwlCarousel className="owl-three" {...options}>
        <div className="item">
          {isWebpSupported() ? (
            <img src="./img/banner-promotion.webp" alt="banner promo" />
          ) : (
            <img src="./img/banner-promotion.png" alt="banner promo" />
          )}
          {/* <img src="./img/banner-promotion.png" alt="banner promo" /> */}
        </div>
        <div className="item">
          {isWebpSupported() ? (
            <img src="./img/banner-promotion.webp" alt="banner promo" />
          ) : (
            <img src="./img/banner-promotion.png" alt="banner promo" />
          )}
          {/* <img src="./img/banner-promotion.png" alt="banner promo" /> */}
        </div>
        <div className="item">
          {isWebpSupported() ? (
            <img src="./img/banner-promotion.webp" alt="banner promo" />
          ) : (
            <img src="./img/banner-promotion.png" alt="banner promo" />
          )}
          {/* <img src="./img/banner-promotion.png" alt="banner promo" /> */}
        </div>
      </OwlCarousel>
    </div>
  );
}

export default BannerPromotion;
