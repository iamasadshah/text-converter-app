import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can perform additional actions here when switching modes,
    // such as updating a context or storing the mode in local storage.
  };
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='navbar'>
  <a className="navbar-brand mx-5" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item">
        <a className="nav-link" href="/">{props.about}</a>
      </li> */}
    </ul>
    <button className="btn btn-outline-primary mx-2" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
  </div>
</nav>
    </div>
  )
}

Navbar.prototype = {
    title : PropTypes.string,   /* Set the property of title to string */
}