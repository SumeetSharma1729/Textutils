import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

export default function Navbar(props) {
  

  const handleDarkMode =(event) => {
    if (props.mode === 'dark')
    {
    props.showDarkMode(event.target.value);
    }
  }

  return (
      <nav className={`navbar k navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <select className="form-select mx-3" style={{width : '12%'}}  onClick={handleDarkMode} defaultValue={{value:'#343434'}} >
        <option>DarkMode</option>
        <option value="#191970">Midnight Blue</option>
        <option value="#023020">Dark Green</option>
        <option value="#343434">Jet Black</option>
      </select>

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' :'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.mode ==='light' ? 'Night' : 'Day'}</label>
      </div>
      
    </div>
  </div>

</nav>
    
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Textutils"
}