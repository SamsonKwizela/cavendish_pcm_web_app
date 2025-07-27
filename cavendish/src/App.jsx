import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NavigationBar } from "./component/NavigationBar";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <NavigationBar />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </MantineProvider>
  );
}

export default App;
