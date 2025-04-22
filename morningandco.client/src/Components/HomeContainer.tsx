import React from 'react';
import CoffeeImg from '../Img/Coffee2.jpg';
import FocacciaImg from '../Img/Focaccia.jpg';
//import IceCoffeeImg from '../Img/Ice-Coffee.jpg';//

const HomeContainer = () => {
    return (
        <div className="custom-carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <li className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </li>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={CoffeeImg} alt="First slide" />
                </div>
                {/* <div className="carousel-item">
                    <img className="d-block w-100" src={IceCoffeeImg} alt="Second slide" />
                </div> */}
                <div className="carousel-item">
                    <img className="d-block w-100" src={FocacciaImg} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>

            </div>
            </div>
       
    );
};

export default HomeContainer;
