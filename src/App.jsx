import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Exams from "./pages/Exams";
import ReviewPage from "./pages/ReviewPage"; // ✅ Import the new ReviewPage

// ✅ Import ThemeProvider
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Layout Route */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path="registration" element={<Registration />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="exams" element={<Exams />} />
              <Route path="reviews" element={<ReviewPage />} /> {/* ✅ Add ReviewPage route */}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;