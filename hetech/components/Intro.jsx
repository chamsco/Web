import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from "next/image";
import Circle from './Circle';

const Intro = () => {
    return (
        <div className={styles.container}>
        <Circle backgroundColor="#b0ff49" top="-50vh" left ="-50vh"/>

            <div className={styles.card}>
                <div className={styles.title}>
                    <span className={styles.brand}>H.E TECHNOLOGIES </span>
                     ENERGIES RENOUVELABLES & RESEAUX</div>
                
                <p className={styles.desc}>
                    Au service de la technologie pour un meilleur avenir
                </p>
                <button className={styles.button}>DISCOVER US</button>
            </div>
            <div className={styles.card}>
                    <Circle backgroundColor="#01c686" top="-30vh" left="50vh"/>

                <Image src="/img/nasa-Q1p7bh3SHj8-unsplash.jpg" width="100%" height="100%" layout="fill" />
                 {/* Faire et remplacer par une planète en 3D qui tourne */}
            </div>

        </div>
    )
}

export default Intro
