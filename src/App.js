import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import PNF from "./Components/Pages/PNF";
import About from "./Components/Pages/About";
import Academics from "./Components/Pages/Academics";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
