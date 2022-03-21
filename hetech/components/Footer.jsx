import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from "Next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.cardL}>
                <h1 className={styles.title}>H.E Technologies </h1>
                <h1 className={styles.linkTitle}> 
                    <a href="/contact" passHref className={styles.link}> 
                        <span>WORK WITH US</span>
                        <Image src="/img/link.png" width="40px" height="40px" alt="" />    
                    </a>
                </h1>
            </div>

            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    99 Rue de la Paix <br/> ABIDJAN
                </div>
                 <div className={styles.cardItem}>
                    contact@hetechnologies.ci <br/> +225 0102030405
                </div>
            </div>

            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                        <br /> __FB __IN __BE __TW
                </div>
                 <div className={styles.cardItem}>
                     © 2022 H.E TECHNOLOGIES,
                        <br />
                        ALL RIGHTS RESERVED
                </div>
            </div>

        </div>
    )
}

export default Footer
