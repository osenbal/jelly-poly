import React from 'react';

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <img
        onClick={() => (document.getElementById('myNav').style.height = '100%')}
        src="./img/icon/BurgerBar.svg"
        alt="hamburger"
      />
    </div>
  );
}

export default HamburgerMenu;
