import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to='/' className='navbar-brand'> REDUX TOOLKIT </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className='nav-link '> HOME </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/shop' className='nav-link '> PRODUCTS </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
