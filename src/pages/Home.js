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
      <Rooms rooms={rooms} />
      <About />
      <BookingForm rooms={rooms} />
    </div>
  );
};

export default Home;
