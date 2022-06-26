import React, { useState, useEffect, Component } from 'react';

import MenuList from './MenuList/MenuList';
import './VariousMenu.css';

class VariousMenu extends Component {
  state = {
    selected: 'choco series',
  };
  handleSelectionMenu(category) {
    this.setState({ selected: category });
  }

  render() {
    return (
      <div className="relative w-full mx-auto mt-24 mb-5">
        <div className="sub-heading">
          <h2 className="text-center title-explore-menus">
            Explore Our <span>Various Menu</span>
          </h2>
          <p className="text-center">
            A chosen menu full of flavors ready to give you freshness from
            <br />
            tiring activity. It's just made special for you.
          </p>
        </div>

        <div className="flex flex-wrap flex-row justify-center gap-10 text-center mt-5 mb-3">
          <p
            onClick={() => {
              this.handleSelectionMenu('choco series');
            }}
            className="menu-series flex-col"
          >
            Choco Series
          </p>
          <p
            onClick={() => {
              this.handleSelectionMenu('special series');
            }}
            className="menu-series flex-col"
          >
            Spesial Series
          </p>
          <p
            onClick={() => {
              this.handleSelectionMenu('yakult series');
            }}
            className="menu-series flex-col"
          >
            Yakult Series
          </p>
        </div>

        <MenuList selected={this.state.selected} />

        <img
          className="shape-comment"
          src="./img/icon/shape-comment-pinned.svg"
          alt="shape pinned coment"
        />

        <div className="flex flex-wrap flex-row justify-center text-center">
          <p className="button-show-more-explore">Show More</p>
        </div>
      </div>
    );
  }
}

export default VariousMenu;
