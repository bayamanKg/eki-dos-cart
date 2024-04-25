import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo_burger from "../../../public/logo.png";
import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const Header = ({count}) => {
   const [active, setActive] = useState(true);
   const [headerColor, setHeaderColor] = useState(true);

   return (
      <header className={headerColor ? "header" : "header header-black"}>
         <div className="container">
            <nav className={active ? "nav" : "nav burger--active"}>
               <div className="logo">
                  <h1>
                     Эки <span>дос</span>
                  </h1>
                  <img width={40} src={logo_burger} alt="" />
               </div>
               <ul onClick={() => setActive(true)}
                  className={active ? "nav-menu" : "nav-menu nav-menu--active "}
               >
                  <li onClick={() => setHeaderColor(true)}>
                     <NavLink to="/">Домой</NavLink>
                  </li>
                  <li onClick={() => setHeaderColor(false)}>
                     <NavLink to="/about">О нас</NavLink>
                  </li>
                  <li onClick={() => setHeaderColor(false)}>
                     <NavLink to="/contact">Контакты</NavLink>
                  </li>
                  <li onClick={() => setHeaderColor(false)}>
                     <NavLink to="/cart"><FaCartShopping size={30}/></NavLink>
                     <span>{count}</span>
                  </li>
               </ul>

               <button
                  onClick={() => setActive((prev) => !prev)}
                  className={headerColor ? "burger" : "burger header-black"}
               >
                  <span></span>
                  <span></span>
                  <span></span>
               </button>
            </nav>
         </div>
      </header>
   );
};
