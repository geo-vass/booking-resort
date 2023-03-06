import React from "react";

const Amenities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 ">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600 ">Kitchen</p>
      </div>

      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">Private parking</p>
      </div>

      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">Sea View</p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">36' TV</p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">Air Conditioning</p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">Wifi</p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4 w-full text-center">
        <p className="text-xl leading-7 text-gray-600">Toaster</p>
      </div>
    </div>
  );
};

export default Amenities;
