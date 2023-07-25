import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext"; // Import the ThemeContext

function Header(props) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Get the values from the context

  // inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Brandon Bay - Software Developer</h1>
      <nav style={navStyle}>
        <Link to={"/"}>
          <div>Home</div>
        </Link>
        <Link to={"/about"}>
          <div>About</div>
        </Link>
        <Link to={"/projects"}>
          <div>Projects</div>
        </Link>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
