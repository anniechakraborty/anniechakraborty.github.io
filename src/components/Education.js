import React from "react";
import "./../styles/Experience.css";

export default function Education() {
  return (
    <div className="workExpCard">
      <h2>Education</h2>
      <div className="experience">
        <div className="left">
          <p className="title">
            Universität Stuttgart, <em>MSc Computer Science</em>
          </p>
          <p className="duration">April 2024 - ongoing</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Created a central process to monitor the onboarding and
                offboarding process for various solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            St. Xavier's College, <em>BSc Computer Science</em>
          </p>
          <p className="duration">July 2018 - June 2021</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Created a central process to monitor the onboarding and
                offboarding process for various solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
