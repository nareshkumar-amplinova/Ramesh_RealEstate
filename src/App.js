import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ's";
import Contact from "./pages/Contact";

// Project pages
import RiversideResidences from "./pages/projects/RiversideResidences";
import SkylineHeights from "./pages/projects/SkylineHeights";
import GreenValley from "./pages/projects/GreenValley";
import OceanView from "./pages/projects/OceanView";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* PROJECTS */}
          <Route path="/projects/riverside-residences" element={<RiversideResidences />} />
          <Route path="/projects/skyline-heights" element={<SkylineHeights />} />
          <Route path="/projects/green-valley" element={<GreenValley />} />
          <Route path="/projects/ocean-view" element={<OceanView />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
