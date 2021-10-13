
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './navbar.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Box = styled.div`
  background-color:green;
  padding:50px;
  border-radius:20px;
`
function App() {
  return (
    <React.Fragment>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand me-2" href="https://mdbgo.com/">
                <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                    height="16"
                    alt=""
                    loading="lazy"
                    style={{marginTop: "-1px"}}
                />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">Dashboard</a>
                    </li> */}
                </ul>
                <div className="d-flex align-items-center justify-content-start">
                    <ul className="navbar-nav mb-lg-0 py-0">
                        <li className="nav-item my-1 mx-3">
                            <a className="nav-link mt-2 py-2" href="#">Home</a>
                        </li>
                        <li className="nav-item my-1 mx-3">
                            <a className="nav-link mt-2 py-2" href="#">About Us</a>
                        </li>
                        <li className="nav-item my-1 mx-3">
                            <a className="nav-link mt-2 py-2" href="#">Pricing</a>
                        </li>
                        <li className="nav-item my-1 mx-3">
                            <a className="nav-link py-2 mb-0" href="#">
                                <Button variant="outlined" className="button " style={{color:"#fff",backgroundColor:"#365282",borderRadius:'10px',}}>Get Started</Button>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            
            </div>
        </nav>
    </React.Fragment>
  );
}

export default App;
