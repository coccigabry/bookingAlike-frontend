import React from "react";
import styles from './PropertyList.module.css';

export default function PropertyList () {
    return (
        <div className={styles.pList}>
            <div className={styles.pListItem}>
                <img  className={styles.pListImg} src="https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="" />
                <div className={styles.pListTitles}>
                    <h1>Hotels</h1>
                    <h2>123.456 Hotels</h2>
                </div>
            </div>
            <div className={styles.pListItem}>
                <img  className={styles.pListImg} src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.pListTitles}>
                    <h1>Apartments</h1>
                    <h2>123.456 Apartments</h2>
                </div>
            </div>
            <div className={styles.pListItem}>
                <img  className={styles.pListImg} src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.pListTitles}>
                    <h1>Resorts</h1>
                    <h2>123.456 Resorts</h2>
                </div>
            </div>
            <div className={styles.pListItem}>
                <img  className={styles.pListImg} src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.pListTitles}>
                    <h1>Villas</h1>
                    <h2>123.456 Villas</h2>
                </div>
            </div>
            <div className={styles.pListItem}>
                <img  className={styles.pListImg} src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className={styles.pListTitles}>
                    <h1>Cabins</h1>
                    <h2>123.456 Cabins</h2>
                </div>
            </div>
        </div>
    )
}