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
                            <img className="d-block w-100" src={FocacciaEditImg}  alt="First slide" />
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
                            <img className="d-block w-100" src={CoffeeEditImg} alt="Second slide" />
                            <div className="carousel-caption">
                                <h2 className="h1">Come for the coffee, stay for the brunch</h2>
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <a href="{% url 'menu' %}" className="btn hero-btn">Book a table</a>
                                    </div>
                                </div>
                            </div>
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
                <div className="container about-us-section">
                    <div className="row mt-5 mx-1 align-items-center">
                        <div className="col-12 col-lg-8">
                            <h2>About Us </h2>
                            <p className="text-justify">At Morning&Co, we believe the best part of the day deserves something truly special. </p>
                            <p className="text-justify">We are more than just a coffee shop, we are a space where craft meets comfort,
                                and where every cup and every dish is made with purpose. Our signature coffees are brewed from carefully selected,
                                high-quality beans, offering a rich and memorable experience in every sip.</p>
                            <p className="text-justify">Our brunch menu, led by a chef with training from the world-renowned Le Cordon Bleu,
                                brings together culinary expertise and feel-good flavors.
                                From fresh pastries to hearty plates, we blend elegance and coziness into every bite.</p>
                            <p className="text-justify">  <p className="text-justify">Our brunch menu, led by a chef with training from the world-renowned Le Cordon Bleu,
                                brings together culinary expertise and feel-good flavors.
                                From fresh pastries to hearty plates, we blend elegance and coziness into every bite.</p></p>
                        </div>
                        <div className="d-none d-lg-block col-lg-4">
                            {/*<img src={ } className="img-fluid" alt="About us image">*/}
                        </div>
                    </div>
                </div> 

            </section>
            {/* End About Us*/}

        </div>
    );
};

export default HomeContainer;
