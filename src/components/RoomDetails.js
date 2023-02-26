import React from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../data";

const RoomDetails = () => {
  const { id } = useParams();
  console.log({ id, rooms });
  const { title, img, guests, space } = rooms.find((room) => {
    if (room.id == id) console.log("found!!!");
    return room.id == id;
  });

  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default RoomDetails;
