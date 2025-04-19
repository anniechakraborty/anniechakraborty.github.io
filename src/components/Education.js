import React from "react";
import "./../styles/Experience.css";

export default function Education() {
  return (
    <div className="workExpCard fly_up_text">
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
                Pursuing my specialisation in Autonomous Systems with course
                work in the domains of Machine Learning, GenAI, Information
                Visualisation etc.
              </li>
              <li>
                Awarded the Femtec Scholarship and inducted into the Femtec
                Class 46
              </li>
              <li>Current grade : 1.6</li>
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
              <li>Graduated with 8.16 CGPA</li>
              <li>
                Dissertation: Developed a new cryptographic algorithm to encrypt
                small texts, passwords and OTPs focusing on speed and security.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Scholarships</h2>
      <div className="experience">
        <div className="left">
          <p className="title">
            Femtec Scholarship Holder, <em>Class 46</em>
          </p>
          <p className="duration">Sept 2024 - ongoing</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Inducted into the Femtec Career Building Program and Scholarship
                for 2024 - 2025 as part of Class 46
              </li>
              <li>
                As part of the career Building Program, attended several workshops on Leadership, Management, Conflict Resolution, Team Building, etc., and networked with the partner companies, and visited their factories and onsite locations to understand their business processes better.
              </li>
              <li>
                Innovation Lab: Working on an innovation project with the partner company E.ON on sustainable energy solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            Online Stipendium von <em>e-fellows.net</em>
          </p>
          <p className="duration">Mar 2025 - ongoing</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Issued by e-fellows.net in March 2025 for students performing in
                the top 10% in the current academic year.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            Fr. Lafont Scholarship for Academic Performance,{" "}
            <em>St. Xavier's College, Kolkata</em>
          </p>
          {/* <p className="duration">Mar 2025 - ongoing</p> */}
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Received scholarship for my academic record in the sessions
                2018-2019 and 2019-2020 from St. Xavier’s College, Kolkata.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
