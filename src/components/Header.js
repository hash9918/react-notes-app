import React from "react";

import { MdDarkMode } from "react-icons/md";
export default function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        <MdDarkMode />
      </button>
    </div>
  );
}
