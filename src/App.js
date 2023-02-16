import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import BookingForm from "./components/BookingForm";

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
      </main>
    </div>
  );
}

export default App;
