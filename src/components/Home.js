import React from "react";
import "./../styles/Home.css";
function HomeComponent() {
  return (
    <div className="homeContainer">
      <h1 className="introHeader">
        Annie Chakraborty is pursuing MSc in Computer Science from the{" "}
        <em>Universität Stuttgart</em>. Her focus is on Autonomous Systems and
        she is specialising in <em>Machine Learning</em> and <em>GenAI</em>.
      </h1>
      <p className="about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default HomeComponent;
