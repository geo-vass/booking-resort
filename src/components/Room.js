import React from "react";
import { BsFillPersonFill, BsArrowsFullscreen } from "react-icons/bs";

const Room = ({ title, img, guests, space }) => {
  return (
    <article className="relative  w-[80%] mx-auto cursor-pointer mb-4 overflow-hidden room">
      <div className="absolute  left-[50%] bottom-[0%] translate-x-[-50%]  z-10 bg-slate-900/40 p-2 w-full h-28 translate-y-[0%] ">
        <h3 className=" text-xl font-bold text-white text-center mb-2">
          {title}
        </h3>
        <div className="flex gap-9 justify-center text-white">
          <div className="flex items-center gap-2">
            <BsFillPersonFill size={25} />
            <span>{guests}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsArrowsFullscreen size={20} />
            <span>{space}</span>
          </div>
        </div>
      </div>
      <img src={img} className=" shadow-lg brightness-90" />
    </article>
  );
};

export default Room;
