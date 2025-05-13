import React from 'react';
import CoffeeImg from '../Img/Coffee.jpg';
import FocacciaImg from '../Img/Focaccia.jpg';
import EggsBeneditImg from '../Img/EggsBenedit.jpg';
import FacadeImg from '../Img/Facade.png';
import OurSpaceImg from '../Img/OurSpace.jpg';
import SanduichImg from '../Img/Sanduich.jpg';
import CellingImg from '../Img/Celling.jpg';
import BrunchImg from '../Img/Brunch.jpg';
import PancakeImg from '../Img/Pancake.jpg';
import { Link } from 'react-router-dom';






const HomeContainer: React.FC = () => {
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
                            <img className="d-block w-100" src={FocacciaImg}  alt="First slide" />
                        <div className="carousel-caption">
                                <h1 className="h1">Welcome to Your Favorite Coffee Spot</h1>
                            <div className="row justify-content-center">
                                <div className="col">
                                        <Link to="/Menu" className="btn hero-btn">Check our menu</Link>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="carousel-item">
                            <img className="d-block w-100" src={CoffeeImg} alt="Second slide" />
                            <div className="carousel-caption">
                                <h1 className="h1">Come for the coffee, stay for the brunch</h1>
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <Link to="/Reservations" className="btn hero-btn">Book a table</Link>
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
                
                    <div className="row mt-5 mx-1 justify-content-center">
                        <div className="col-12 col-lg-8">
                            <h2 className="mb-4 text-center">Our Story</h2>
                            <p className="text-justify">Morning&Co is more than just a coffee shop, it's a space where craft and comfort come together.
                                We offer signature coffees brewed from high-quality beans, providing a rich, memorable experience in every sip. </p>
                            <p className="text-justify">Our brunch menu, crafted by a Le Cordon Bleu-trained chef, blends culinary expertise with feel-good flavors,
                                offering everything from fresh pastries to hearty dishes, blending elegance with coziness in every bite.</p>
                           
                        </div>
                        
                    </div>
                

            </section>
            {/* End About Us*/}


            {/* Start Photo Gallery */}
            <section className="photo-gallery-container mt-5">
                <h2 className="mb-4 text-center">Gallery</h2>
                <div className="row">
                    <div className="column col-12 col-sm-6 col-md-3">
                        <img src={CellingImg} style={{ width: "100%" }} alt="Celling" />
                        <img src={BrunchImg} style={{ width: "100%" }} alt="Brunch" />
                    </div>
                    <div className="column col-12 col-sm-6 col-md-3">
                        <img src={BrunchImg} style={{ width: "100%" }} alt="Brunch" />
                        <img src={PancakeImg} style={{ width: "100%" }} alt="Pancake" />
                      
                    </div>
                    <div className="column col-12 col-sm-6 col-md-3">
                        <img src={EggsBeneditImg} style={{ width: "100%" }} alt="Eggs Benedit" />
                        <img src={SanduichImg} style={{ width: "100%" }} alt="Sanduich" />
                    </div>
                    <div className="column col-12 col-sm-6 col-md-3">
                        <img src={FacadeImg} style={{ width: "100%" }} alt="Facade" />
                        <img src={OurSpaceImg} style={{ width: "100%" }} alt="Our Space" />
                    </div>
                </div>
            </section>
            {/* End Photo Gallery */}

           


         
        </div>
    );
};

export default HomeContainer;
