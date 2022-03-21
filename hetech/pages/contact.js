import React from 'react'
import styles from '../styles/Contact.module.css'
import Link from "Next/link"
import Circle from '../components/Circle'


const contact = () => {
    return (
        <div className={styles.container} >
            <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
            <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh"/>
            <h1> CONTACTEZ NOUS</h1>
                <form className={styles.form}>
                    <input className={styles.inputS} placeholder="Nom" />
                    <input className={styles.inputS} placeholder="prénom" />
                    <input className={styles.inputS} placeholder="email" />
                    <input className={styles.inputS} placeholder="sujet" />
                    <textarea className={styles.textArea} placeholder="message" rows={6} />
                    <button className={styles.button}>SUBMIT</button>

                </form>
        </div>
    )
}

export default contact
