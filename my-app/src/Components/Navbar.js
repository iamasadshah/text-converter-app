import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
 return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='navbar'>
        <div className='container-fluid'>
        <a className="navbar-brand mx-5" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a required string
};