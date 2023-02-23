import React from "react";
import About from "./About";
import BookingForm from "./BookingForm";
import Hero from "./Hero";
import Rooms from "./Rooms";

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
