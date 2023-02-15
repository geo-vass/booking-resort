import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";

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
      </main>
    </div>
  );
}

export default App;
