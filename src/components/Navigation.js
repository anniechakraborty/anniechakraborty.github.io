import React from "react";
import './../styles/Navigation.css'
function NavigationComponent() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        Annie
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={()=> {console.log('clicked!!')}}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* TODO: Make it collapse properly in mobile view*/}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul> */}

        {/* Right menu */}
        {/* links to linkedin, medium, book blog*/}
      </div>
    </nav>
  );
}

export default NavigationComponent;
