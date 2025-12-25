import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ's";
import Contact from "./pages/Contact";

// Project pages
import GoldenHeightsRajapur from "./pages/projects/GoldenHeightsRajapur";
import GoldenHeightsShad from "./pages/projects/GoldenHeightsShad";
import GoldenHeightsSada from "./pages/projects/GoldenHeightsSada";
import GoldenHeightsBudh from "./pages/projects/GoldenHeightsBudh";
import AdurisAabharana from "./pages/projects/AduriAabharana";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* PROJECTS */}
          <Route path="/projects/rajapur" element={<GoldenHeightsRajapur />} />
          <Route path="/projects/shadnagar" element={<GoldenHeightsShad />} />
          <Route path="/projects/sadasivapet" element={<GoldenHeightsSada />} />
          <Route path="/projects/budhera" element={<GoldenHeightsBudh />} />
          <Route path="/projects/aabharana" element={<AdurisAabharana />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;