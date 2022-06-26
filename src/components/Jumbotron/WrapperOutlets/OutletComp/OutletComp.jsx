import React from 'react';

function OutletComp(props) {
  return (
    <div className="item-outlet flex">
      <img src="./img/icon/gis_location-poi-o.svg" alt="map icon" />
      <span>{props.nameOutlet}</span>
    </div>
  );
}

export default OutletComp;
