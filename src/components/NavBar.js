import React, { useState } from "react";

import { FaInstagram, FaFacebookF, FaTwitter, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <section className="flex justify-between w-full px-4 py-2 min-h-[50px] items-center bg-gray-700/80 text-white">
      {/* Main nav */}
      <ul className="hidden md:flex gap-5 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="flex gap-5">
        <a href="https://facebook.com">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com">
          <FaTwitter size={20} />
        </a>
      </div>
      {/* Hamburger Menu */}
      <div size={20} className="md:hidden flex cursor-pointer">
        <FaBars size={20} onClick={() => setNav(true)} />
      </div>
      <div
        className={`${
          nav ? " top-0 left-0 right-0 " : " top-0 left-[-100%] "
        }   md:hidden flex bottom-0  ease-in duration-500  justify-center text-2xl overflow-hidden absolute   bg-black/90  text-gray-200 pt-10 z-50  `}
      >
        <MdClose
          size={50}
          className="text-white cursor-pointer absolute right-3 top-0 text-[var(--primary-dark)] "
          onClick={() => setNav(false)}
        />
        <ul className="flex flex-col items-center just gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#deals">Deals</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
