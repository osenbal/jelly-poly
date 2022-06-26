import React, { Fragment, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import Modal from '../Modal/Modal';

function MenuItem({ name }) {
  // console.log(props);.
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="item modal-open item-carousel-1"
      >
        {isWebpSupported() ? (
          <img className="item-image" src="./img/Menu.webp" alt="menu" />
        ) : (
          <img className="item-image" src="./img/Menu.png" alt="menu" />
        )}
        <div className="middle-text-carousel">
          <div className="name-product">{name}</div>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} name={name} />
    </Fragment>
  );
}

export default MenuItem;
