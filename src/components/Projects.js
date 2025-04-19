import React from "react";
import "./../styles/BlogProjects.css";

export default function Projects() {
  return (
    <div className="blogContainer fly_up_text">
      <h2>Projects</h2>
      <div className="postCard">
        <h3>Personal Website</h3>
        <p className="publishedDate">04/2025 - 04/2025</p>
        <p className="summary">
          Created a full stack website application using ReactJS for the
          frontend, and Flask for the backend. Used Render to host the Flask app
          and Netlify to host the React app.
        </p>
        <div className="buttons">
          <a
            href="https://github.com/anniechakraborty/anniechakraborty.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
          <a
            href="https://github.com/anniechakraborty/anniechakraborty.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project (React)
          </a>
          <a
            href="https://github.com/anniechakraborty/PersonalWebsiteBackend"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project (Flask)
          </a>
        </div>
      </div>
      <div className="postCard">
        <h3>Kanban Board</h3>
        <p className="publishedDate">01/2025 - 02/2025</p>
        <p className="summary">
          Created a full stack Kanban application using Angular 19 for the
          frontend, and Flask for the backend. Additionally, integrated MongoDB
          to manage user data. The project utilises user authentication to
          implement the <em>CRUD operations</em>.
        </p>
        <a
          href="https://github.com/anniechakraborty/simpleKanbanBoard"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <div className="postCard">
        <h3>Monolithic Cloud Architecture </h3>
        <p className="publishedDate">02/2025 - 02/2025</p>
        <p className="summary">
          Developed a possible <em>low-cost cloud-native architecture</em> for
          an up-and-coming <em>retail business</em> which wants to build an
          online presence. This report is written as part of the{" "}
          <em>Service Management and Cloud Computing</em> program offered by the
          Universtät Stuttgart.
        </p>
        <a
          href="https://medium.com/@annie.chakraborty/implementing-a-monolithic-cloud-architecture-1e9e48e4b47e"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <div className="postCard">
        <h3>LLM based Planning</h3>
        <p className="publishedDate">11/2024 - 02/2025</p>
        <p className="summary">
          Researched the ways <em>Large Language models (or LLMs)</em> can be
          integrated in <em>planning tasks</em>. Compiled a seminar paper which
          focused on understanding planning problems in detail, the existing
          algorithms and their drawbacks, and the possible ways LLMs and{" "}
          <em>prompting frameworks</em> which can be used to resolve the
          drawbacks.
        </p>
        {/* <a href="https://github.com/anniechakraborty/simpleKanbanBoard" target="_blank" rel="noopener noreferrer">
            View Project
          </a> */}
      </div>
      <div className="postCard">
        <h3>Book Quest</h3>
        <p className="publishedDate">06/2024 - 07/2024</p>
        <p className="summary">
          The project aims to streamline and enhance the process of book
          discovery by leveraging the capabilities of NoSQL database MongoDB's
          Full-Text Search and then see how it fares against SQL database
          PostgreSQL by comparing the efficiency of query execution and the
          complexity of query searches supported by both.
          <br />
          Tech stack used: Python, XML, XSLT, MongoDB and PostgreSQL.
        </p>
        <a
          href="https://github.com/anniechakraborty/BookQuest"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <div className="postCard">
        <h3>New Bit Level Positional Encryption Algorithm (NBPLEA - Ver 2)</h3>
        <p className="publishedDate">08/2020 - 04/2021</p>
        <p className="summary">
          As part of my bachelor thesis, I developed a new cryptographic
          algorithm, using Java as my codebase, that would encrypt and decrypt
          text files. The spectral analysis showed that the process is free from
          standard cryptography attacks namely brute force, known plaintext and
          differential attacks.
        </p>
        <a
          href="https://ijsrcseit.com/paper/CSEIT217350.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
