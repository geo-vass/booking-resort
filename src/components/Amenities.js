import React, { useState } from "react";

const Amenities = ({ amenities }) => {
  const [showMore, setshowMore] = useState(false);
  const showLessAmount = 5;

  return (
    <div className="mb-auto w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-2  ">
        {amenities?.map((amenity, index) => {
          if (index > showLessAmount && !showMore) return;
          return (
            <div
              className="mx-auto flex  flex-col gap-y-4 border rounded-md p-4 w-full text-center "
              key={index}
            >
              <p className=" leading-7 text-gray-600 ">{amenity}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-right p-4">
        <a
          className="text-sm  text-gray-600 cursor-pointer hover:underline"
          onClick={() => setshowMore(!showMore)}
        >
          {showMore ? `Show less...` : "Show more..."}
        </a>
      </div>
    </div>
  );
};

export default Amenities;
