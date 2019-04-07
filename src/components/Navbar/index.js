import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky text-center">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <h2><a href="/">Clicky Game {props.restart}</a></h2>
          </li>
          <li className="nav-item">
            <h2>WINTER IS COMING</h2>
          </li>
          <li className="nav-item">
          <h2>
            <span id= "score">Score: {props.score}     </span>
            <span id= "top-score">Top Score: {props.topScore}</span>
            </h2>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
