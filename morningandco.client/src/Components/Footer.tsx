import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            <div className="container pt-4">
                <section className="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <i className="bi bi-google"></i>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                </section>
            </div>

            <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <a className="text-dark">Morning & Co</a>
            </div>
        </footer>
    );
};

export default Footer;
