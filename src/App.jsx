import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Start } from "./components/Start";
import { AboutUs } from "./components/AboutUs";
import { Preview } from "./components/Preview";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Start" element={<Start />} />
        <Route path="AboutUS" element={<AboutUs />} />
        <Route path="Preview" element={<Preview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
