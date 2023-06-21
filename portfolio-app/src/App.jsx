import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/home/HomePage";
import ProjectDetail from "./components/pages/projects/ProjectDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/projects/:title" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
