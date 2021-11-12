import React from 'react';
import './Navigation.css'
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth/useAuth';
import { Box } from '@mui/system';

const Navigation = () => {
  const{user, logout}=useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand d-flex justify-content-center align-items-center fs-3 fw-bold text-success" href="/"><img className="logo" src={logo} alt="" />Hero Tea </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
        </li>
      </ul>
      <div className="d-flex">

        
              {
                user?.email ?
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Dashboard
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li>
                          <NavLink to="/dashboard">
                              <button className="w-75 border-0 btn-lg btn-outline-success mb-3">Dashboard</button>
                          </NavLink>
                          </li>
                          <li>
                          <button onClick={logout} className="text-success w-75 border-0 btn-lg btn-outline-danger" >Logout</button>
                          </li>
                        </ul>
                    </div>
                    :
                    <NavLink to="/login">
                        <button className="btn btn-lg btn-outline-info">Login</button>
                    </NavLink>
               }
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;