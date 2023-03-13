import React from "react";
import { BsFillPersonFill, BsArrowsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";

const Room = ({ id, title, img, guests, space, startingPrice }) => {
  return (
    <article className="relative mx-auto cursor-pointer mb-4 w-full overflow-hidden room">
      <Link to={`/rooms/${id}`}>
        <div className="text-white absolute z-10 bg-slate-900/40 text-center p-2">
          <p>from {startingPrice} € per night</p>
        </div>
        <div className="absolute  left-[50%] bottom-[0%] translate-x-[-50%]  z-10 bg-slate-900/40 p-2 w-full h-28 translate-y-[0%] ">
          <h3 className="  text-white text-center mb-2">{title}</h3>
          <div className="flex gap-9 justify-center text-white">
            <div className="flex items-center gap-2">
              <BsFillPersonFill size={25} />
              <span className="text-sm">{guests} guests</span>
            </div>
            <div className="flex items-center gap-2">
              <BsArrowsFullscreen size={20} />
              <span className="text-sm">{space}</span>
            </div>
          </div>
        </div>

        <img src={img} className="shadow-lg brightness-90 rounded-md  w-full" />
      </Link>
    </article>
  );
};

export default Room;
