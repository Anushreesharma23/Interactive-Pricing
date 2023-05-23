import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar bg-${props.mode}`}>
      <div className="Container">
        {/* <a className="navbar-brand" href="/">
        {props.title}
      </a> */}
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarSupportedContent"
          // aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            className={`form-switch mx-5 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              // id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {};
