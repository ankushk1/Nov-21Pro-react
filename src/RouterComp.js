import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

const RouterComp = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Routes>
        <Route path="/:id/:name" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default RouterComp;
