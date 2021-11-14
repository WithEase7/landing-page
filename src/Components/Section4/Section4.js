import React from "react";
import styles from "./Section4.module.css";
import image from "../../assets/svg-6.svg";
import { FaSearch } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <h1>Why go with Logo?</h1>
          <p className={styles.para1}>
            Because we know that even the best technology is only as good as the
            people behind it. That’s why we offer expert, 24/7 phone support,
            plus a lot more.
          </p>
          <p className={styles.para2}>
            Call our technical support team at 040 67607600.
          </p>
          <div className={styles.inputdiv}>
            <input title="text" placeholder="Type a question" />
            <div className={styles.search}>
              <FaSearch size={22}/>
            </div>
          </div>
          <div className={styles.lastdiv}>
            <h5 className={styles.heading1}>View How-To-Articles</h5>
            <h5 className={styles.heading2}>Read Our Blog</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
