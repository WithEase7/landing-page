import React from 'react'
import styles from './Section3.module.css';

const Section3 = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <img src={} alt='' className={styles.image} />
                    <h2>Demo</h2>
                    <p>Lorem ipsum</p>
                </div>
                <div className={styles.card}>
                    <img src={} alt='' className={styles.image} />
                    <h2>Demo</h2>
                    <p>Lorem ipsum</p>
                </div>
                <div className={styles.card}>
                    <img src={} alt='' className={styles.image} />
                    <h2>Demo</h2>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default Section3
