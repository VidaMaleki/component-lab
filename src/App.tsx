import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ComponentsPage from "./features/gallery/ComponentsPage";
import IntroSection from "./features/gallery/IntroSection";
import CategoryPage from "./features/gallery/CategoryPage";
import AboutPage from "./features/about/AboutPage";
import ResourcesPage from "./features/resources/ResourcesPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main id="main" style={{ paddingTop: 8 }}>
        <Routes>

          <Route path="/" element={<Navigate to="/components" replace />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/components" element={<ComponentsPage />}>
            <Route index element={<IntroSection />} />
            <Route path=":slug" element={<CategoryPage />} />
          </Route>
          <Route path="/about" element={<AboutPage portfolioUrl="https://vidamaleki.com" />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
    </Router>
  );
};