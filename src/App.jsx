import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

function App() {
  return (
    <Router>
      <div className="app" style={{ position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
