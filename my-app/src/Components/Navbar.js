import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  id='navbar'>
      <div className='container-fluid'>
        <a className="navbar-brand mx-5" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string()
};