import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-700/80 text-white rounded-lg  md:px-6 md:py-8 dark:bg-gray-500 mt-6 p-4  m-auto w-full  gap-2 relative z-10">
      <div className="sm:flex sm:items-center sm:justify-between  items-center max-w-[1140px] mx-auto">
        <a href="/" className="flex gap-4">
          <FaUmbrellaBeach size={30} className="" />
          <h1 className="text-xl font-bold ">RESORT</h1>
        </a>
        <ul className="flex flex-wrap items-center mt-6 sm:mt-0 justify-center">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Follow Us
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6  sm:mx-auto  lg:my-8 " />
      <span className="block text-sm text-center">
        <a href="/" className="hover:underline">
          ©RESORT™. All Rights Reserved.
        </a>
      </span>
    </footer>
  );
};

export default Footer;
