import React from "react";
import styles from "./Section2.module.css";
import image from "../../assets/svg-2.svg";

const Section2 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.right}>
        <div className={styles.rightcontent}>
          <h5 className={styles.title}>DEMO PRO PROGRAM</h5>
          <h1 className={styles.heading}>
            Free tools for designers and developers.
          </h1>
          <p className={styles.para}>
            Save hours with bulk WordPress updates and automated backups, manage
            multiple clients from a single dashboard, get exclusive members-only
            discounts and more — all for free.
          </p>
          <button className={styles.explore}>Explore Tools</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
