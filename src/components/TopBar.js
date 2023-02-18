import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const TopBar = () => {
  return (
    <section className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-4">
        <FaUmbrellaBeach size={30} className="text-[var(--primary-dark)]" />
        <h1 className="text-xl font-bold text-gray-700">RESORT</h1>
      </div>
      <div className="flex gap-4">
        <div className="hidden md:flex items-center gap-1">
          <HiOutlineClock size={20} className="text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <BiPhoneCall size={20} className="text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">(+30) 12456889</p>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
