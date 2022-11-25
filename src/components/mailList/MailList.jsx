import React from "react";
import styles from './MailList.module.css';

export default function MailList () {
    return (
        <div className={styles.mailList}>
            <h1 className={styles.mailListTitle}>Save time, save money!</h1>
            <span className={styles.mailListDescr}>Sign up and we'll send you the best deals!</span>
            <div className={styles.mailListCnt}>
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}