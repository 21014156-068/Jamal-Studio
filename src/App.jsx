import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blogs";
import SingleBlogPost from "./pages/SingleBlog";
import AboutPage from "./pages/About";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="app" style={{ position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-study" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/single-blog" element={<SingleBlogPost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
