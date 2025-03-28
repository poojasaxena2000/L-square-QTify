import React from "react";
import styles from "./Hero.module.css";
import image from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroh1}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={image} width={212} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
