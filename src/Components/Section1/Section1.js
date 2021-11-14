import React from "react";
import styles from "./Section1.module.css";
import img1 from "../../assets/svg-9.svg";

const Section1 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <div className={styles.leftcontent}>
          <h5 className={styles.title}>DEMO PROGRAM</h5>
          <h1 className={styles.heading}>Start your business with our products.</h1>
          <p className={styles.para}>
            Our Reseller Program lets you open your own online business in a
            matter of hours. You choose which GoDaddy products you want to sell
            — and for how much — and we provide the rest, from the web store to
            payment processing.
          </p>
          <button className={styles.getstarted}>Get Started</button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={img1} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Section1;
