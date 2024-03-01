import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // State variable to track whether dark mode is enabled or not
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Inverting the current state of dark mode when the button is clicked
    setDarkMode(!darkMode);
    // Additional actions such as updating context or storing mode in local storage can be performed here
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`} id='navbar'>
        {/* Navbar Brand */}
        <a className="navbar-brand mx-5" href="/">{props.title}</a>

        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar Items */}
          <ul className="navbar-nav mr-auto">
            {/* Navbar Links */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li> */}
          </ul>

          {/* Dark Mode Switch Button */}
          <button className="btn btn-outline-primary mx-2" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </div>
  );
}

// PropTypes for validation
Navbar.propTypes = {
  title: PropTypes.string(),
};
