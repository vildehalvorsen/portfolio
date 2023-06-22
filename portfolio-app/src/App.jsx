import "./App.css";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";

import HomePage from "./components/pages/home/HomePage";
import ProjectDetail from "./components/pages/projects/ProjectDetail";


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
