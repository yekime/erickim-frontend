import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Research from "./components/pages/Research";
import Demos from "./components/pages/Demos";
// import Chess from "./components/pages/demos/Chess";
// import Blog from "./components/pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="research" element={<Research />} /> */}
          <Route path="demos" element={<Demos />}>
            {/* <Route path="chess" element={<Chess />} /> */}
          </Route>
          {/* <Route path="blog" element={<Blog />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
