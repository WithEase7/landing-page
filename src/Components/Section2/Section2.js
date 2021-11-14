import React from 'react'
import styles from './Section2.module.css'
import image from '../../assets/svg-9.svg'

const Section2 = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                <div className={styles.leftcontent}>
                    
                </div>
            </div>
            <div className={styles.right}>
                <img src={image} alt='' className={styles.image}/>
            </div>
        </div>
    )
}

export default Section2
