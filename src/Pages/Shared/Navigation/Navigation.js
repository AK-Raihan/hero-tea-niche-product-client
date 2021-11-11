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
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
      </ul>
      <div className="d-flex">
              {
                user?.email ?
                    <Box>
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </Box>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>
               }
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;