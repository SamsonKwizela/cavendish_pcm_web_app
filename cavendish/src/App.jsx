import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <ContactUs />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
