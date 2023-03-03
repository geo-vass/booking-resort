import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../data";
import { useFetch } from "../hooks/useFetch";
import BookingForm from "../components/BookingForm";
import Gallery from "./Gallery";

const RoomDetails = () => {
  const { id } = useParams();
  const room = useFetch(id);

  const { title, img, guests, space } = room;

  return (
    <section className="mt-4 p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10">
      <h1 className="mb-2">{title}</h1>
      <div className="flex  py-2 text-xl space-x-2">
        <span>2-4 guests ·</span>
        <span>1 bedroom ·</span>
        <span>2 beds ·</span>
      </div>

      <Gallery />

      <div className="flex flex-wrap gap-2 ">
        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600 ">Kitchen</p>
        </div>

        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">Private parking</p>
        </div>

        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">Sea View</p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">36' TV</p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">Air Conditioning</p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">Wifi</p>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4 border rounded-md p-4">
          <p className="text-xl leading-7 text-gray-600">Toaster</p>
        </div>
      </div>
      <BookingForm room={room} />
    </section>
  );
};

export default RoomDetails;
