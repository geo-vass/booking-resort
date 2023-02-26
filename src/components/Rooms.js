import React, { useState } from "react";
import Room from "./Room";
import { rooms } from "../data";

const Rooms = () => {
  return (
    <section
      id="rooms"
      className="max-w-[1140px] m-auto p-8 w-full md:flex mt-[-60px] gap-4"
    >
      {rooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </section>
  );
};

export default Rooms;
