import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }} >
                    <span className={styles.logo}>CocciBooking</span>
                </Link>
                <div className={styles.navItems}>
                    <button className={styles.navButton}>Register</button>
                    <button className={styles.navButton}>Login</button>
                </div>
            </div>
        </div>
    )
};