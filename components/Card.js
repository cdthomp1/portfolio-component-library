import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardHeader}></div>
                <h2>PROJECT TITLE</h2>
                <div className={styles.cardLink}>
                    <Link href="#">Learn More</Link>
                </div>
            </div>
            <div className="w-60 h-72 flex flex-col content-center justify-evenly mx-auto bg-white rounded-md filter drop-shadow-greenDrop">
                <div className="w-40 h-32 bg-bgMain mx-auto"></div>
                <h2 className="mx-auto font-bold">PROJECT TITLE</h2>
                <div className="mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop">
                    <Link className="" href="#">Learn More</Link>
                </div>
            </div>
            <p className="my-10"></p>
        </>
    )
}

export default Card
