import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer";
import Departments from "./pages/Departments";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Departments" element={<Departments />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
