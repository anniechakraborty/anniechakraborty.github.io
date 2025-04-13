import React, {useState, useEffect} from "react";

export default function WorkExperience() {
  return (
    <div className="workExpCard">
      {/* loop through every company */}
      <div className="experience">
        <div className="left">
          <p className="title">
            Daimler Truck AG, <em>Work Study Student</em>
          </p>
          <p className="duration">Sep 2024 - Feb 2025</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Created a central process to monitor the onboarding and
                offboarding process for various solutions
              </li>
              <li>
                Implemented protocols to streamline user access and privileges
                ensuring data safety
              </li>
              <li>Worked on optimizing the knowledge base and documentation</li>
              <li>
                Created standardized blueprints for project documentation to
                address pain points with current documentation process
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            Fraunhofer Institute for Industrial Engineering IAO,{" "}
            <em>Student Research Assistant</em>
          </p>
          <p className="duration">Jul 2024 - Mar 2025</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Conducted research into new technologies for optimizing the
                frontend design for mobile and web applications
              </li>
              <li>
                Led the research into finding the optimal text-to-speech and
                speech-to-text implementations for mobile apps using ReactNative
              </li>
              <li>
                Responsible for building a secure messaging system in SpringBoot
                using Apache Kafka and Docker
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            Sprinriver Technology Private Limited, <em>Software Engineer 1</em>
          </p>
          <p className="duration">Feb 2023 - Mar 2024</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                Developed a comprehensive dashboard using Angular and Flask for
                a private electricity company in West Bengal, to better identify
                consumer complaints
              </li>
              <li>
                Led the development of the company's flagship product, where I
                implemented user registration and access control, features to
                share knowledge items, and upload their own documents to
                generate summaries and highlights
              </li>
              <li>
                Developed the UI for an e-commerce platform, with product
                listings, bookshelf and custom dashboard, for booksellers using
                ReactJS
              </li>
              <li>
                Led the development of the mobile app version of the e-commerec
                platform using React Native for the above platform
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="left">
          <p className="title">
            PwC India, <em>Technology Consultant</em>
          </p>
          <p className="duration">Aug 2021 - Feb 2023</p>
        </div>
        <div className="right">
          <div className="description">
            <ul>
              <li>
                As a Microsoft Dynamics 365 Finance and Operations specialist, I
                customized ERP software according to the client's business needs
              </li>
              <li>
                Generated Axapta Forms and Classes, and developed SSRS Reports
                to implement business logic
              </li>
              <li>
                Implemented Sales Module and custom LTC (Laytime Calculation)
                module for a Fortune 500 company
              </li>
              <li>
                Provided training and guidance to new hires and interns,
                maintained records of code changes and created a reference base
                for colleagues
              </li>
              <li>
                Streamlined collaboration and code maintenance processes within
                the team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
