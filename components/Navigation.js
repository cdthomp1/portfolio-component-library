import React from 'react'
import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="logoContainer">
                    <img src="/images/Dev.png" />
                    <p>Cameron<br /> Thompson</p>
                </div>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">
                    <ul>
                        <li className="menuItem"><a href="/">Home</a></li>
                        <li className="menuItem"><a href="/about">About Me</a></li>
                        <li className="menuItem"><a href="/articles">Articles</a></li>
                        <li className="menuItem"><a href="/projects">Projects</a></li>
                        <li className="menuItem"><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
