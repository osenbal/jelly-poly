/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDom from 'react-dom';

import { isWebpSupported } from 'react-image-webp/dist/utils';
function Modal({ open, onClose, name }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal_overlay fixed ">
      <div className="container modal fixed p-8">
        <button className="mr-0 ml-auto block" onClick={onClose}>
          <img src="./img/icon/close-button.svg" alt="button close modal" />
        </button>
        <div className="heading-modal grid grid-cols-3 mx-8 mt-8 mb-4">
          <h3 className="col-span-2">{name}</h3>
          <img
            className="justify-self-end"
            src="./img/icon/medium-size.svg"
            alt="glass size"
          />
        </div>
        <div className="price-detail mx-8 mb-10">
          <p>Rp. 10.000</p>
        </div>
        <div className="description-detail mx-8 text-center">
          <p>
            Click the button, then we quickly direct you to the product in your
            favourite marketplace
          </p>
        </div>
        <div className="wrap-online-order mx-8 mt-8">
          <ul className="list-online-order flex gap-8 justify-between xl:flex-nowrap lg:flex-nowrap md:flex-nowrap	sm:fex-wrap xs:flex-wrap">
            <li>
              <a href="#">Shopee Food</a>
            </li>
            <li>
              <a href="#">Traveloka Eats</a>
            </li>
            <li>
              <a href="#">GrabFood</a>
            </li>
            <li>
              <a href="#">GoFood</a>
            </li>
          </ul>
        </div>

        <div className="wrap-detail-img mt-8 mx-8 ">
          {isWebpSupported() ? (
            <img
              className="block mx-auto"
              src="./img/Detail-Product.webp"
              alt="detail product"
            />
          ) : (
            <img
              className="block mx-auto"
              src="./img/Detail-Product.png"
              alt="detail product"
            />
          )}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
