import '../App.css';
import React from 'react';
import MenuImg from '../Img/Menu.jpg';

const Menu = () => {
    return (
        <div className="menu-container"> {/*improve */}
            <div className="menu-content">
                <h1 className="menu-title"> Menu</h1>
                <img className="menu-image" src={MenuImg} alt="Menu" />
            </div>
        </div>
    );
};
export default Menu;
