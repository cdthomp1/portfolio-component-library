import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}></div>
            <h2>PROJECT TITLE</h2>
            <div className={styles.cardLink}>
                <Link href="#">Learn More</Link>
            </div>
        </div>
    )
}

export default Card
