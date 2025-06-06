import '../App.css';
import React from 'react';

const HomeAutorized = () => {
    return (


        <div className="login-container">

       
           
            <br></br>

            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>




            <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                    <input id="search-input" type="search" id="form1" className="form-control" />
                    <label className="form-label" htmlFor="form1">Search</label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>


        </div>


    );
};
export default HomeAutorized;
