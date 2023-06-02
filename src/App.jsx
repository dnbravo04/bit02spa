import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index";
import { AboutUs } from "./components/AboutUs";
import { Preview } from "./components/Preview";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/bit02spa/" element={<Index />} />
        <Route path="/bit02spa/AboutUS" element={<AboutUs />} />
        <Route path="/bit02spa/Preview" element={<Preview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
