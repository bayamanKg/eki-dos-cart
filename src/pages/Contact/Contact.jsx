import React from "react";
import "./Contact.css";

export const Contact = () => {
   return (
      <div className="contact">
         <div className="container contact-inner">
            <h2>Контактная информация</h2>
            <ul>
               <li>
                  Телефон: <span id="phone-number">+7 (999) 123-45-67</span>
               </li>
               <li>
                  Электронная почта: <span id="email">example@example.com</span>
               </li>
               <li>
                  Адрес:{" "}
                  <span id="address">г. Москва, ул. Примерная, д. 123</span>
               </li>
            </ul>
         </div>
      </div>
   );
};
