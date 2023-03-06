import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../data";
import { useFetch } from "../hooks/useFetch";
import BookingForm from "../components/BookingForm";
import Gallery from "./Gallery";
import Amenities from "../components/Amenities";

const RoomDetails = () => {
  const { id } = useParams();
  const room = useFetch(id);

  const { title, img, guests, bedroom, beds, space, startingPrice } = room;

  return (
    <section className="mt-4 p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10">
      <h1 className="mb-2">{title}</h1>
      <div className="flex  py-2 text-xl space-x-2">
        <span>{guests} guests ·</span>
        <span>{bedroom} bedroom ·</span>
        <span>{beds} beds ·</span>
      </div>

      <Gallery />
      <Amenities />
      <BookingForm rooms={[{ ...room }]} />
    </section>
  );
};

export default RoomDetails;
