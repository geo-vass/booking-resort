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
      <div className="max-w-[1140px] m-auto w-full gap-2 px-4 pt-8 relative z-10">
        <Rooms rooms={rooms} />
      </div>
      <div className="flex flex-col md:flex-row max-w-[1140px] m-auto w-full px-4 gap-4  z-10">
        <About />
        <BookingForm rooms={rooms} />
      </div>
    </div>
  );
};

export default Home;
