import '../App.css';
import React from 'react';
import LogoMiniImg from '../Img/LogoMini.png';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-nav px-4 py-3">

            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');`}
            </style>

            <div className="d-flex d-lg-none justify-content-between align-items-center w-100 mb-2">
                <div className="navbar-brand">
                    <Link className="nav-link" to="/HomePage">
                        <img className="navLogo" src={LogoMiniImg} alt="Logo" />
                    </Link>
                </div>


            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse flex-lg-row flex-column align-items-center justify-content-around space w-100" id="navbarNav">

                <div className="d-flex flex-lg-row flex-column">
                    <ul className="navbar-nav flex-column flex-lg-row me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                      
                            <Link className="nav-link" to="/Menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/features">Locations</a>
                        </li>
                    </ul>
                </div>

                
                <div className="navbar-brand mx-3 d-none d-lg-block">
                    <Link className="nav-link" to="/HomePage">
                        <img className="navLogo" src={LogoMiniImg} alt="Logo" />
                    </Link>
                </div>

                <div className="d-flex flex-lg-row flex-column">
                    <ul className="navbar-nav flex-column flex-lg-row me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/pricing">Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Photo Gallery</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>



    );
};

export default NavBar;


                         