import React from "react";
import "./../styles/Home.css";
function HomeComponent() {
  // TODO: add an animated flower in the right
  return (
    <div className="homeContainer">
      <h1 className="introHeader fly_up_text">
        Annie Chakraborty is pursuing MSc in Computer Science from the{" "}
        <em>Universität Stuttgart</em>. Her focus is on Autonomous Systems and
        she is specialising in <em>Machine Learning</em> and <em>GenAI</em>.
      </h1>
      <p className="about fly_up_text">
        Results-driven professional with a strong background in technology, a
        passion for solving complex problems and excels in collaborative
        environments. Fluent in English and a little German, with excellent
        communication and interpersonal skills.
      </p>
      <p className="about fly_up_text">
        My skills lie in Web Development using frameworks like Angular, ReactJS and Python-Flask. Mobile-app development using ReactNative, database management using PostgreSQL and MongoDB, and Machine Learning and Deep Learning using Python, Scikit-learn and PyTorch.
      </p>

      {/* <WorkExperience />
      <Education /> */}
    </div>
  );
}

export default HomeComponent;
