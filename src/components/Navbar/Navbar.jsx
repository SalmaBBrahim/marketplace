import React from "react";
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { assets } from '../../assets/assets';
import './Navbar.css'; 

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-background">
        <div className="navbar-content">
          <div>
            <a href="#" className="logo-container">
              <img src={assets.logo} alt="logo" className='logo' />
            </a>
          </div>
          <div className="search-cart-container">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                className="search-input"
              />
              <IoMdSearch className="search-icon" />
            </div>
            <div className='login-cart'>
              <Link to="/signup" className="login-btn">
              <button>S'inscrire</button>
             </Link> 
            </div>
            <button onClick={handleOrderPopup} className="cart-btn">
              <span className="cart-text">Panier</span>
              <FaCartShopping className="cart-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
