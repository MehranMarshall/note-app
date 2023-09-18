import React from "react";

export const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle-btn"
        onClick={() => handleDarkMode((prev) => !prev)}
      >
        Toggle Mode
      </button>
    </div>
  );
};
