import '../App.css';
import React from 'react';



const ContactUs = () => {
    return (


      


            <div className="contact-container">
               
                    
            <div className="row justify-content-center w-40">
                            
                <div className="main-container col-lg-5">
                        <div className="row  mx-1 ">
                            <h1 className="contact-text font-weight-light mt-2 ">Contact Us</h1>
                            <p className="contact-text">Do you have any questions? Please do not hesitate to contact us directly</p>
                                    <form className="mt-4">
                                            <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea className="form-control" rows="3" placeholder="message"></textarea>
                                                </div>
                                            </div>
                                               <div className="btn-container col-lg-12 ">
                                           
                                            <button type="submit" className="custom-btn btn-danger-gradiant mt-3 border-0 px-3 py-2"><span> SUBMIT</span></button>
                                            

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    
               
            </div>

            
    );
};
export default ContactUs;


