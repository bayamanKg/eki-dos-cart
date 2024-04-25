import React from "react";
import "./FoodItem.css";

export const FoodItem = ({ food , handleClick}) => {
   return (
      <div className="food-cart">
         <div className="food-img">
            <img src={food.img} alt="shawarma" />
         </div>
         <div className="food-info">
            <h3>{food.name}</h3>
            <p>{food.price}</p>
            <button onClick={() => handleClick(food)} className="cart-btn">Добавить в корзину</button>
         </div>
      </div>
   );
};
