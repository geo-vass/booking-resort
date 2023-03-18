import React, { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = ({ rooms }) => {
  return (
    <section
      id="rooms"
      className="max-w-[1140px] m-auto  w-full grid md:grid-cols-3 mt-[-80px] auto-rows-fr pt-4 gap-4 "
    >
      {rooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </section>
  );
};

export default Rooms;
