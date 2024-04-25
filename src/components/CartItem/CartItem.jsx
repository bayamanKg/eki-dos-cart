import React from "react";
import "./CartItem.css";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CartItem = ({ food, handleRemove, handleChange }) => {
   const { name, price, img, amount, id } = food;
   return (
      <div className="card">
         <div className="card-info">
            <img src={img} alt="image" />
            <div className="card-text">
               <h3>{name}</h3>
               <p>{price}</p>
            </div>
         </div>
         <div className="card-logic">
            <div className="card-count">
               <button className="minus" onClick={() => handleChange(food, -1)}>
                  <FaMinus />
               </button>
               <button className="count">{amount}</button>
               <button className="plus" onClick={() => handleChange(food, +1)}>
                  <FaPlus />
               </button>
            </div>
            <button onClick={() => handleRemove(id)} className="remove">
               Удалить
            </button>
         </div>
      </div>
   );
};
