import React from "react";
import "./../styles/Home.css";

import WorkExperience from "./WorkExperience";
import Education from "./Education";
function HomeComponent() {
  // TODO: add an animated flower in the right
  return (
    <div className="homeContainer">
      <h1 className="introHeader">
        Annie Chakraborty is pursuing MSc in Computer Science from the{" "}
        <em>Universität Stuttgart</em>. Her focus is on Autonomous Systems and
        she is specialising in <em>Machine Learning</em> and <em>GenAI</em>.
      </h1>
      <p className="about">
        Results-driven professional with a strong background in technology, a
        passion for solving complex problems and excels in collaborative
        environments. Fluent in English and a little German, with excellent
        communication and interpersonal skills.
      </p>
      <p className="about">
        My skills lie in 
      </p>

      {/* <WorkExperience />
      <Education /> */}
    </div>
  );
}

export default HomeComponent;
