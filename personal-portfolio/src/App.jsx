import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recalc from "./pages/Recalc";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isRecalcPage = location.pathname === "/recalc";

  return (
    <>
      {!isRecalcPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <main className="page">
              <Home />
            </main>
          }
        />

        <Route
          path="/projects"
          element={
            <main className="page">
              <Projects />
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main className="page">
              <About />
            </main>
          }
        />

        <Route
          path="/contact"
          element={
            <main className="page">
              <Contact />
            </main>
          }
        />

        <Route path="/recalc" element={<Recalc />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;