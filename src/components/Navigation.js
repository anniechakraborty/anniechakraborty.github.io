import React, { useState } from "react";
import "./../styles/Navigation.css";
import { Link } from "react-router-dom";

function NavigationComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Annie
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
      <Link to="/work" onClick={() => setIsOpen(false)}>
          Work
        </Link>
        <Link to="/education" onClick={() => setIsOpen(false)}>
          Education
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavigationComponent;
