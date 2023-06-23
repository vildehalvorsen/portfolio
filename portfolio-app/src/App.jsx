import "./App.css";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ProjectDetail from "./components/pages/projects/ProjectDetail";
import DesignPage from "./components/pages/design/DesignPage";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
