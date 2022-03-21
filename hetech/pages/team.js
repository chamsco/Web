import React from 'react'
import styles from '../styles/Team.module.css'
import Link from "Next/link"
import Image from "Next/image"
import { users } from "../data";


const team = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notre Equipe</h1>
            <div className={styles.wrapper}>
            
                {users.map(user => (
                    <div key={user.id} className={styles.cardL}>
                     <div className={styles.imgContainer}>
                            <Image className={styles.avatar} 
                            src={`/img/${user.avatar}`}width="45" height ="45" objectFit="cover" alt=""/>
                        </div>
                         <div className={styles.cardS}>

                                <div className={styles.info}>
                                    <span className={styles.username}>{user.name}</span>
                                    <span className={styles.jobTitle}>{user.title}</span>
                                                            <p className={styles.comment}>
                            {user.comment}
                        </p>
                                </div>
                            </div>


                    </div>
                ))}
            
            
            </div>
        </div>
    )
}

export default team
