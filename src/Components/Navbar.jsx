import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
      <nav style={{fontSize :'15px'}} className={`navbar navbar-expand-lg navbar-${props.mode === 'success' ? 'dark' : 'light'} text-${props.mode=== 'success' ? 'light' : 'dark'} bg-${props.mode=== 'success' ? 'success' : 'light'}`} id='navbar'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.abouttext}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'success' ? 'light' : 'dark'} my-2`}>
              <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
              <input onClick={props.toggleMode} className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.ProTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'title here',
  abouttext: 'about'
}
