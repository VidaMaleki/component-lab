import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import ComponentsPage from "./features/gallery/ComponentsPage";
import IntroSection from "./features/gallery/IntroSection";
import CategoryPage from "./features/gallery/CategoryPage";


export default function App() {
  return (
    <Router>
      <Navbar />
      <main id="main" style={{ paddingTop: 8 }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/components" element={<ComponentsPage />}>
            <Route index element={<IntroSection />} />
            <Route path=":slug" element={<CategoryPage />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
