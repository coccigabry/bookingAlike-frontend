import React from 'react';
import styles from './Featured.module.css';

export default function Featured() {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <img className={styles.featuredImg} src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Chicago</h1>
                    <h2>123.456 properties</h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img className={styles.featuredImg} src="https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxjaXR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Paris</h1>
                    <h2>123.456 properties</h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img className={styles.featuredImg} src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Moscow</h1>
                    <h2>123.456 properties</h2>
                </div>
            </div>
        </div>
    )
}