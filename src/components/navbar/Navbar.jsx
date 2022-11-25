import React from "react";
import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <span className={styles.logo}>CocciBooking</span>
                <div className={styles.navItems}>
                    <button className={styles.navButton}>Register</button>
                    <button className={styles.navButton}>Login</button>
                </div>
            </div>
        </div>
    )
};