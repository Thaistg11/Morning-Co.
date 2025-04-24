import React from 'react';

const Footer = () => {
    return (
        <footer className="custom-Footer text-center text-white" style={{ backgroundColor: "rgba(10, 10, 10, 1)" }}>
            <div className="container pt-4">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <section className="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="fa fa-facebook" target="_blank"
                            rel="noopener noreferrer" ></a>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <a href="https://www.google.co.uk/maps/" className="fa fa-google" target="_blank"
                            rel="noopener noreferrer"></a>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <a href="https://www.instagram.com/ " className="fa fa-instagram" target="_blank"
                            rel="noopener noreferrer"></a>
                    </a>
                </section>
            </div>

            
        </footer>
    );
};

export default Footer;
