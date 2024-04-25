import React from "react";
import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import { Menu } from "../../components/Menu/Menu";

export const Home = ({handleClick}) => {
   return (
      <main className="home">
         <Hero />
         <Menu handleClick={handleClick} />
      </main>
   );
};  
