import React from "react";
import "./Footer.css";
import insta from "../../../public/insta.svg";
import whatsapp from "../../../public/whatsapp.svg";
import telegram from "../../../public/telegram.svg";

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="row">
               <div className="row-left">
                  <h4>Свяжитесь с нами</h4>
                  <p>Адрес: ул. Примерная, д. 123, г. Примерный</p>
                  <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                  <p>Email: info@example.com</p>
               </div>
               <div className="row-right">
                  <h4>Подписывайтесь на нас</h4>
                  <p>
                     Следите за нашими новостями и акциями в социальных сетях:
                  </p>
                  <ul class="social-icons">
                     <li>
                        <a target="_blank" href="https://whatsapp.com">
                           <img src={whatsapp} alt="" />
                        </a>
                     </li>
                     <li>
                        <a target="_blank" href="https://telegram.org">
                           <img src={telegram} alt="" />
                        </a>
                     </li>
                     <li>
                        <a target="_blank" href="https://instagram.com">
                           <img src={insta} alt="" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};
