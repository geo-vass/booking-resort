import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full relative">
      <header>
        <TopBar />
        <NavBar />
      </header>
      <main>
        <Hero />
        <Activities />
        <BookingForm />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
