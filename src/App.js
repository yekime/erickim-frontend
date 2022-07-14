import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Research from "./components/pages/Research";
import Demos from "./components/pages/Demos";
import Blog from "./components/pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
