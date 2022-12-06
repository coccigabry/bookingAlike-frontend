import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from './Suggested.module.css';

export default function Suggested() {

    const { data, error, reFetch } = useFetch(
        'http://localhost:4000/api/hotels?featured=true&limit=4'
    );

    return (
            <div className={styles.suggested} >
                {
                    data && data.map((item) => (
                        <div className={styles.suggestedItem} key={item._id} >
                            <img
                                className={styles.suggestedImg}
                                src={item?.photos[0]}
                                alt=""
                            />
                            <span className={styles.suggestedName}>
                                {item?.name}
                            </span>
                            <span className={styles.suggestedCity}>
                                {item.city}
                            </span>
                            <span className={styles.suggestedPrice}>
                                Starting from € {item.cheapestPrice}
                            </span>
                            {
                                item.rating &&
                                <div className={styles.suggestedRating}>
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            }
                        </div>
                    ))
                }
            </div >
    )

}