import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";

function App() {
   const [cart, setCart] = useState([]);
   const handleClick = (item) => {
      setCart([...cart, item]);
   };
   const handleRemove = (id) => {
      setCart(cart.filter((item) => item.id !== id));
   };
   const handleChange = (item, d) => {
      let ind = -1;
      cart.forEach((data, index) => {
         if (item.id === data.id) {
            ind = index;
         }
      });
      const tempArr = cart;
      tempArr[ind].amount += d;

      if (tempArr[ind].amount === 0) {
         tempArr[ind].amount = 1;
      }
      setCart([...tempArr]);
   };
   return (
      <>
         <Header count={cart.length} />
         <Routes>
            <Route
               path="/"
               exact
               element={<Home handleClick={handleClick} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
               path="/cart"
               element={
                  <Cart
                     cart={cart}
                     handleRemove={handleRemove}
                     handleChange={handleChange}
                  />
               }
            />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
