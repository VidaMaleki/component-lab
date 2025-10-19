import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";


export default function App() {
  return (
    <Router>
      <Navbar />
      <main id="main" style={{ paddingTop: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}
