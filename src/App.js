import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JavaScript
import { Route, Routes } from "react-router-dom";

import HomeComponent from "./components/Home";
import NavigationComponent from "./components/Navigation";
import WorkExperience from "./components/WorkExperience";
import Blog from "./components/Blog";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <WorkExperience />
      <Education />
      <Blog /> */}
    </div>
  );
}

export default App;
