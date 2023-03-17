import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import { Routes, Route, Link } from "react-router-dom";

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

            <Route path="/rooms/:id" element={<RoomDetails />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

export default App;
