import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

          <Route path="/" element={<ComponentsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/components" element={<ComponentsPage />}>
            <Route index element={<IntroSection />} />
            <Route path=":slug" element={<CategoryPage />} />
          </Route>
          <Route path="/about" element={<div style={{ padding: 16 }}><h1>About Vida Lab</h1><p>Vida Lab is a collection of reusable UI components with live previews and copyable code snippets.</p></div>} />
        </Routes>
      </main>
    </Router>
  );
}
