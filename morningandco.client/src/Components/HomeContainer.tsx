import React from 'react';
import CoffeeEditImg from '../Img/CoffeeEdit.jpg';
import FocacciaEditImg from '../Img/FocacciaEdit.jpg';

const HomeContainer = () => {
    return (
        <div> 
            {/*Start Carrosel*/}
        <div className="custom-carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <li className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li> 
                </li>
            <div className="carousel-inner">
                <div className="carousel-item active">
                        <img className="d-block w-100" src={CoffeeEditImg} alt="First slide" />
                        <div className="carousel-caption">
                            <h1 className="h1">Morning&Co</h1>
                            <h2 className="h2">Where comfort meets coffee</h2>
                            <div className="row justify-content-center">
                                <div className="col">
                                    <a href="{% url 'menu' %}" className="btn hero-btn">Check our menu</a>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="carousel-item">
                        <img className="d-block w-100" src={FocacciaEditImg} alt="Second slide" />
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
            {/*End Carrosel*/}

            {/* Start About Us*/}
            <section>


            </section>
            {/* End About Us*/}

        </div>
    );
};

export default HomeContainer;
