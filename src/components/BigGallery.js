import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const BigGallery = ({ gallery, toggleGallery }) => {
  return (
    <div className="fixed w-full h-full z-50 bg-white top-0 bottom-0 right-0 left-0 overflow-y-scroll">
      <div
        className="cursor-pointer sticky top-[0%] right-[0%] mt-2 bg-white"
        onClick={toggleGallery}
      >
        <AiOutlineLeft size={30} />
      </div>
      <div className="mt-2 p-4 max-w-[800px] m-auto  grid gap-4 grid-cols-1   ">
        {gallery?.map((img, index) => {
          return (
            <div key={index}>
              <img
                className="rounded-md max-h-[500px] w-full"
                src={img}
                alt="/"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BigGallery;
