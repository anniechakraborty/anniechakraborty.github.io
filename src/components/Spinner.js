import React from "react";
import "./../styles/Spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="fancy-spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
}
