import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NavigationBar } from "./component/NavigationBar";
import { Footer } from "./pages/Footer";
import { theme } from "./Colors";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <NavigationBar />
      <Footer />
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
