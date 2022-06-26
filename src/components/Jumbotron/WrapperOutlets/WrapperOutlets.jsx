import React, { useEffect } from 'react';
import OutletComp from './OutletComp/OutletComp';
import ShowMore from './ShowMore/ShowMore';

function WrapperOutlets() {
  useEffect(() => {
    // Accordion outlet component
    const itemOutlets = document.querySelectorAll('.item-outlet');
    const buttonShowMore = document.querySelector('.button-show-more');

    const listOutlets = document.getElementById('list-outlets');

    for (let i = 6; i < itemOutlets.length; i++) {
      itemOutlets[i].classList.add('up-item');
      itemOutlets[i].classList.add('colapsed');
    }

    buttonShowMore.addEventListener('click', () => {
      for (let i = 6; i < itemOutlets.length; i++) {
        itemOutlets[i].classList.toggle('show');
        itemOutlets[i].classList.toggle('colapsed');
        listOutlets.classList.toggle('list-item-outlets');
        listOutlets.classList.toggle('list-item-outlets-show');
      }
    });
  }); // checks for changes in the values in this array

  return (
    <div className="w-full">
      <div className="wrap-outlets colapsed-outlets xl:w-[60%] w-full">
        <div
          id="list-outlets"
          className="list-item-outlets flex flex-wrap mx-2 gap-2 justify-center align-center"
        >
          <OutletComp nameOutlet="Bangun Nusa" />
          <OutletComp nameOutlet="Jembatan Besi" />
          <OutletComp nameOutlet="Menceng" />
          <OutletComp nameOutlet="Jelambar Utara" />
          <OutletComp nameOutlet="Joglo" />
          <OutletComp nameOutlet="Tomang Utara" />
          <OutletComp nameOutlet="Puri Kembangan" />
          <OutletComp nameOutlet="Cempaka Putih" />
          <OutletComp nameOutlet="Babakan Ciparay" />
        </div>

        <div className="wrap-button-show-more show-more-btn text-center mb-8">
          <ShowMore />
        </div>
      </div>
    </div>
  );
}

export default WrapperOutlets;
