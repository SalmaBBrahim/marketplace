import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { assets } from '../../assets/assets';
import './Navbar.css'; 

const Navbar = ({ handleOrderPopup }) => {
   const[menu,setMenu] = useState("home")
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <img src={assets.logo} alt="logo" className='logo' />
          
            <ul className="navbar-menu">
              <li onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>Acceuil</li>
              <li onClick={()=>setMenu("femme")} className={menu ==="femme"?"active":""}>Femme</li>
              <li onClick={()=>setMenu("homme")} className={menu ==="homme"?"active":""}>Homme</li>
              <li onClick={()=>setMenu("contact")} className={menu ==="contact"?"active":""}>Contactez-Nous</li>
            </ul>
          <div className="navbar-right">
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                className="search-input"
              />
               <IoMdSearch className="" />
              <Link to="/signup" className="signup-btn">
              <button  className="signup-btn">S'inscrire</button>
              </Link> 
              <button onClick={handleOrderPopup} className="cart-btn">
               <span className="cart-text">Panier</span>
              <FaCartShopping className="cart-icon" />
              </button>
             
          </div>
         
            
        </div>
        </div>
      
    
  );
};

export default Navbar;
