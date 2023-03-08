import React from "react";

const Amenities = ({ amenities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 p-4 ">
      {amenities?.map((amenity) => {
        return (
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
            <p className=" leading-7 text-gray-600 ">{amenity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Amenities;
