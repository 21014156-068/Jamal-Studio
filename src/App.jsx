import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="app" style={{ position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
