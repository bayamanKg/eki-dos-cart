import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, isActive }) => {
   return (
      <button className={isActive ? "btn btn--active" : "btn"} onClick={onClick}>
         {children}
      </button>
   );
};
