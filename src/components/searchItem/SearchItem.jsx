import React from "react";
import { Link } from "react-router-dom";
import styles from './SearchItem.module.css';


export default function SearchItem({ item }) {

    return (
        <div className={styles.searchItem}>
            <img
                className={styles.searchItemImg}
                src={item.photos[0]}
                alt=""
            />
            <div className={styles.searchItemDescr}>
                <h1 className={styles.searchItemTitle}>
                    {item.name}
                </h1>
                <span className={styles.searchItemDistance}>
                    {item.distanceCityCenter}m from center
                </span>
                <span className={styles.searchItemShuttle}>
                    Free airport shuttle
                </span>
                <span className={styles.searchItemSubtitle}>
                    {item.title}
                </span>
                <span className={styles.searchItemFeatures}>
                    {item.descr}
                </span>
                <span className={styles.searchItemCancel}>
                    Free cancellation
                </span>
                <span className={styles.searchItemCancelSub}>
                    Up to 1 week before check-in
                </span>
            </div>
            <div className={styles.searchItemDetails}>
                {
                    item.rating &&
                    <div className={styles.searchItemRating}>
                        <span>Excellent</span>
                        <button>
                            {item.rating}
                        </button>
                    </div>
                }
                <div className={styles.searchItemInfos}>
                    <span className={styles.searchItemPrice}>
                        € {item.cheapestPrice}
                    </span>
                    <span className={styles.searchItemTax}>
                        Includes taxes and fees
                    </span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className={styles.searchItemCheck}>Check availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
                    
}