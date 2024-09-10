import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import { useEffect } from "react";
import { useApp } from "./hooks/useApp";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const { isLoggedIn } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
