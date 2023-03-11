import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../data";
import { useFetch } from "../hooks/useFetch";
import BookingForm from "../components/BookingForm";
import Gallery from "./Gallery";
import Amenities from "../components/Amenities";
import BigGallery from "../components/BigGallery";

const RoomDetails = () => {
  const { id } = useParams();
  const room = useFetch(id);

  const { title, guests, bedroom, beds, amenities, gallery } = room;
  // console.log({ amenities });
  return (
    <section className="p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10">
      <h1 className="mb-2 px-4">{title}</h1>
      <div className="flex  px-4 text-l space-x-2">
        <span>{guests} guests ·</span>
        <span>{bedroom} bedroom ·</span>
        <span>{beds} beds ·</span>
      </div>

      <Gallery gallery={gallery} />
      <div className="flex flex-col md:flex-row p-4 max-w-[1140px] m-auto w-full  gap-4  ">
        <Amenities amenities={amenities} />
        <BookingForm rooms={[{ ...room }]} />
      </div>
    </section>
  );
};

export default RoomDetails;
