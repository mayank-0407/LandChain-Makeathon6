import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddLand from "./Pages/Dashboard/AddLand";

function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addland" element={<AddLand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
