import React from 'react'
import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src="https://cameronthompson.io/images/Dev.png" />
                <p>Cameron<br /> Thompson</p>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}><Link href="#">Home</Link></div>
                <div className={styles.menuItem}><Link href="#">About</Link></div>
                <div className={styles.menuItem}><Link href="#">Projects</Link></div>
                <div className={styles.menuItem}><Link href="#">Articles</Link></div>
                <div className={styles.menuItem}><Link href="#">Contact</Link></div>
            </div>
        </div>
    )
}

export default Navigation
