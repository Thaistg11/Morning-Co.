import '../App.css';
import React from 'react';


const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
            </style>
          
             <h1 className="navFont"> Morning & Co.</h1>
               
            
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
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/features">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pricing">Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pricing">Photo Galery</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;