import React from 'react';

function ShowMore() {
  return (
    <button className="flex align-center button-show-more mx-auto">
      <img
        className="my-auto"
        src="./img/icon/drop-down.svg"
        alt="drop down icon"
      />
      <span>&nbsp; Show More</span>
    </button>
  );
}

export default ShowMore;
