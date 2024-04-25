import React, { useEffect, useState } from "react";
import "./Cart.css";
import { CartItem } from "../../components/CartItem/CartItem";

export const Cart = ({ cart, handleRemove, handleChange }) => {
   const [price, setPrice] = useState(0);
   const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
   };
   useEffect(() => {
      handlePrice();
   });
   return (
      <div className="cart">
         <div className="container cart-inner">
            {cart.map((food) => (
               <CartItem
                  food={food}
                  handleRemove={handleRemove}
                  handleChange={handleChange}
               />
            ))}
            {cart.length ? (
               <div className="price">
                  <h3>Общяя сумма состовляет</h3>
                  <h3>{price} сомов</h3>
               </div>
            ) : (
               <p> у вас нету элементов</p>
            )}
         </div>
      </div>
   );
};
