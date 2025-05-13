import '../App.css';
import React from 'react';
import NewMenuImg from '../Img/NewMenu.jpg';

const Menu = () => {
    return (
        <div className="menu-container"> {/*improve */}
            <div className="menu-content">
                <img className="menu-image" src={NewMenuImg} alt="Menu" />
            </div>
        </div>
    );
};
export default Menu;
