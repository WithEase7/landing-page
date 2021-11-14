import React from "react";
import styles from "./Section3.module.css";
import img1 from "../../assets/svg-3.svg";
import img2 from "../../assets/svg-4.svg";
import img3 from "../../assets/svg-5.svg";

const Section3 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.heading}>Our Services</div>
      <div className={styles.cardwrapper}>
        <div className={styles.cardcontainer}>


          <div className={styles.card}>
            <div className={styles.cardcontent}>
              <img src={img1} alt="" className={styles.image} />
              <h3>Cloud Compute</h3>
              <p>
                Powerful compute instances with Intel CPUs and 100% SSD storage.
              </p>
              <h4>Starting at $2.50/month</h4>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardcontent}>
              <img src={img3} alt="" className={styles.image} />
              <h3>Block Storage</h3>
              <p>
                Fast SSD-backed scalable and redundant storage with up to 10TB
                volumes.
              </p>
              <h4>Starting at $2.50/month</h4>

            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardcontent}>
              <img src={img2} alt="" className={styles.image} />
              <h3>Dedicated Cloud</h3>
              <p>
                Dedicated Cloud compute instances without the noisy neighbors.
              </p>
              <h4>Starting at $2.50/month</h4>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Section3;
