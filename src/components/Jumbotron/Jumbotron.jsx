import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import WrapperOutlets from './WrapperOutlets/WrapperOutlets';
import './Jumbotron.css';

function Jumbotron() {
  return (
    <div className="my-jumbotron">
      <div className="flex flex-wrap overflow-hidden lg:-mx-1 xl:-mx-1">
        <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <div className="wrap-jumbotron-col-1 flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
              <h1 className="title-heading-jumbotron">
                Discover <span>Delicious Drinks</span> and Enjoy Your Day.
              </h1>
            </div>

            <WrapperOutlets />

            <div className="w-full delivery-product">
              <div className="xl:w-[60%] w-full col1-sec3 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
                <img
                  className="mx-auto"
                  src="./img/icon/Divider.svg"
                  alt="divider"
                />
                <p className="text-center mt-5 mb-3">
                  We are also available at :
                </p>
                <img
                  className="mx-auto"
                  src="./img/icon/delivery-online.svg"
                  alt="Online Shop"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2 xl:order-last lg:order-last order-first">
          <div className="wrap-jumbotron-col-2 flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
            <img
              className="shape-pinned-jumbotron"
              src="./img/icon/shape-jumbotron.svg"
              alt="shape pinned"
            />

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
              {isWebpSupported() ? (
                <img
                  className="image-product-jumbotron"
                  src="./img/pothoProduct-desktop.webp"
                  alt="product jumbotron"
                />
              ) : (
                <img
                  className="image-product-jumbotron"
                  src="./img/pothoProduct-desktop.png"
                  alt="product jumbotron"
                />
              )}
            </div>

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-1 xl:px-1">
              <div className="wrap-icon-sosialmedia gap-10 flex md:justify-center">
                <div className="icon-sosial-media justify-self-center">
                  <img src="./img/icon/IG-Icon.svg" alt="icon instagram" />
                </div>

                <div className="icon-sosial-media">
                  <img src="./img/icon/WA-Icon.svg" alt="icon whatsapp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
