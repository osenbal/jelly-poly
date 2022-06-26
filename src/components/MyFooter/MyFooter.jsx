import React from 'react';
import './MyFooter.css';

function MyFooter() {
  return (
    <div className="grid mt-16 md:justify-center justify-start">
      <div className="logo-footer mx-auto xl:mx-0">
        <img className="w-32" src="./img/Logo.svg" alt="Logo" />
      </div>

      <div className="content-footer grid gap-10 justify-center grid-cols-1 xl:grid-cols-2">
        <div className="description-footer xl:w-[70%] w-full">
          <p>
            Jl. Bangun Nusa 3, RT.6/RW.2, Cengkareng Timur, Cengkareng, Kota
            Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730
          </p>
        </div>
        <div className="navigation-footer grid gap-5 lg:grid-cols-3 grid-cols-1">
          <div className="mx-auto">
            <h3>Navigation</h3>
            <ul className="list-navigation">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Menu</a>
              </li>
              <li>
                <a href="">Customer Talks</a>
              </li>
              <li>
                <a href="">Promotion</a>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <h3>Categories</h3>
            <ul className="list-navigation">
              <li>
                <a href="">Cocho Series</a>
              </li>
              <li>
                <a href="">Special Series</a>
              </li>
              <li>
                <a href="">Yakult Series</a>
              </li>
            </ul>
          </div>
          <div className="contact-navigation mx-auto">
            <h3>Contact</h3>
            <ul>
              <li className="mb-3">
                <a className="flex" href="">
                  <img src="./img/icon/mail-icon.svg" alt="mail icon" />
                  {'\u00A0'}
                  {'\u00A0'}Jellypoli@gmail.com
                </a>
              </li>
              <li className="mb-3">
                <a className="flex" href="">
                  <img
                    src="./img/icon/wa-footer-icon.svg"
                    alt="whatsapp icon"
                  />
                  {'\u00A0'}
                  {'\u00A0'}0878887887
                </a>
              </li>
              <li>
                <a className="flex" href="">
                  <img src="./img/icon/ig-footer-icon.svg" alt="ig icon" />
                  {'\u00A0'}
                  {'\u00A0'}@jellypoli_indonesia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="link-sosial-media flex flex-wrap gap-5 justify-center xl:justify-start mt-8 mb-16">
        <a href="">
          <img src="./img/icon/mail-icon.svg" alt="mail icon" />
        </a>
        <a href="">
          <img src="./img/icon/ig-footer-icon.svg" alt="instagram icon" />
        </a>
        <a href="">
          <img src="./img/icon/wa-footer-icon.svg" alt="wa icon" />
        </a>
        <a href="">
          <img src="./img/icon/browser-icon.svg" alt="browser icon" />
        </a>
      </div>
    </div>
  );
}

export default MyFooter;
