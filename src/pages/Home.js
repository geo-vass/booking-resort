import React from "react";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";

const Home = () => {
  return (
    <div>
      <Hero />
      <Rooms />
      <About />
      <BookingForm />
    </div>
  );
};

export default Home;
