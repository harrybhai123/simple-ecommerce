import React from "react";
import "./Hero.css";
import pic from "./img/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={pic} alt="pic" />
      </div>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  );
};

export default Hero;
