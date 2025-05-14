import '../App.css';
import React from 'react';
import CellingReservImg from '../Img/CellingReserv.jpg';
import { Link } from 'react-router-dom';

const Reservations = () => {
    return (
        <div>
            <header>
                {/* Jumbotron */}
                <div
                    className="reservation-page p-5 text-center bg-body-tertiary"
                    style={{ backgroundImage: `url(${CellingReservImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <h1 className="header-text mb-3"> Reserve a time with U </h1>
                    <h4 className="header-text mb-3">Book Now</h4>
                    
                </div>
                {/* Jumbotron */}
            </header>


            <div className="contact-container">
                <div className="row mx-1">
                    <Link to="/Login" className="btn hero-btn">Login</Link>
                    
                  
                </div>
            </div>
        </div>
    );
};

export default Reservations;