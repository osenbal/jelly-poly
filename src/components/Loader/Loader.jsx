import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="wrap-loader my-96 mx-auto grid justify-center align-center ">
      <div className="lds-ripple mx-auto my-auto ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
