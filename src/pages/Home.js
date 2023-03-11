import React from "react";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const rooms = useFetch();

  return (
    <div>
      <Hero />
      <div className="p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10">
        <Rooms rooms={rooms} />
        <div className="flex flex-col md:flex-row p-4 max-w-[1140px] m-auto w-full  gap-4 ">
          <About />
          <BookingForm rooms={rooms} />
        </div>
      </div>
    </div>
  );
};

export default Home;
