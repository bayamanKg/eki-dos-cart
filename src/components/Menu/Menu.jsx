import React, { useState } from "react";
import "./Menu.css";
import { Button } from "../Button/Button";
import { foods } from "../../data";
import { FoodItem } from "../FoodItem/FoodItem";

export const Menu = ({ handleClick }) => {
   const [menuName, setMenuName] = useState("all");
   return (
      <div className="menu">
         <div className="container">
            <div className="menu-title">
               <h1>Наше меню</h1>
            </div>
            <div className="menu-foods">
               <div className="menu-tabs">
                  <Button
                     isActive={menuName === "all"}
                     onClick={() => setMenuName("all")}
                  >
                     Все меню
                  </Button>
                  <Button
                     isActive={menuName === "shawarma"}
                     onClick={() => setMenuName("shawarma")}
                  >
                     Шаурмы
                  </Button>
                  <Button
                     isActive={menuName === "burgers"}
                     onClick={() => setMenuName("burgers")}
                  >
                     Бургеры
                  </Button>
                  <Button
                     isActive={menuName === "drinks"}
                     onClick={() => setMenuName("drinks")}
                  >
                     Напитки
                  </Button>
               </div>
               <div className="menu-item">
                  {menuName === "all"
                     ? foods.map((food) => (
                          <FoodItem handleClick={handleClick} food={food} key={food.name} />
                       ))
                     : foods
                          .filter((food) => food.category === menuName)
                          .map((food) => (
                             <FoodItem handleClick={handleClick} food={food} key={food.name} />
                          ))}
               </div>
            </div>
         </div>
      </div>
   );
};
