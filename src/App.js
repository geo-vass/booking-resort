import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import RoomDetails from "./components/RoomDetails";

function App() {
  return (
    <div className="h-full relative">
      <header>
        <TopBar />
        <NavBar />
      </header>
      <main>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

export default App;
