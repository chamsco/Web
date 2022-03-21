import styles from "../styles/Testimonials.module.css";
import Link from "Next/link"
import Image from "Next/image";

import React from 'react'
import Circle from "./Circle";
import { users } from "../data";

const Testimonials = () => {
    return (
        <div className={styles.container} >
            <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
            <h1>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user => (
                    <div key={user.id} className={styles.card}>
                     <div className={styles.person}>
                            <Image className={styles.avatar} 
                            src={`/img/${user.avatar}`}width="45" height ="45" objectFit="cover" alt=""/>
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>

                            </div>
                        </div>
                        <p className={styles.comment}>
                            {user.comment}
                        </p>
                        <Image src={`/img/${user.logo}`} width="30" height="30" alt=""/>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
