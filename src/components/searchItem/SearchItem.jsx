import React from "react";
import styles from './SearchItem.module.css';

export default function SearchItem() {
    return (
        <div className={styles.searchItem}>
            <img
                className={styles.searchItemImg}
                src="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <div className={styles.searchItemDescr}>
                <h1 className={styles.searchItemTitle}>Tower Street Apartments</h1>
                <span className={styles.searchItemDistance}>500m from center</span>
                <span className={styles.searchItemShuttle}>Free airport shuttle</span>
                <span className={styles.searchItemSubtitle}>
                    Studio Apartment with Air Conditioning
                </span>
                <span className={styles.searchItemFeatures}>
                    Entire studio - 1 bathroom - 21m<sup>2</sup> - 1 double bed
                </span>
                <span className={styles.searchItemCancel}>Free cancellation</span>
                <span className={styles.searchItemCancelSub}>
                    Up to 1 week before check-in
                </span>
            </div>
            <div className={styles.searchItemDetails}>
                <div className={styles.searchItemRating}>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className={styles.searchItemInfos}>
                    <span className={styles.searchItemPrice}>€ 123</span>
                    <span className={styles.searchItemTax}>Includes taxes and fees</span>
                    <button className={styles.searchItemCheck}>Check availability</button>
                </div>
            </div>
        </div>
    )
}