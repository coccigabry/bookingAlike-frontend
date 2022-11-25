import React from "react";
import styles from './Suggested.module.css';

export default function Suggested() {
    return (
        <div className={styles.suggested}>
            <div className={styles.suggestedItem}>
                <img className={styles.suggestedImg} src="https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className={styles.suggestedName}>Aparthotel Tinto de Verano</span>
                <span className={styles.suggestedCity}>Madrid</span>
                <span className={styles.suggestedPrice}>Starting from €120</span>
                <div className={styles.suggestedRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.suggestedItem}>
                <img className={styles.suggestedImg} src="https://images.unsplash.com/photo-1607029256096-8d9167b3bee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80" alt="" />
                <span className={styles.suggestedName}>Cachaca Apartments</span>
                <span className={styles.suggestedCity}>Rio de Janeiro</span>
                <span className={styles.suggestedPrice}>Starting from €60</span>
                <div className={styles.suggestedRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.suggestedItem}>
                <img className={styles.suggestedImg} src="https://images.unsplash.com/photo-1533421821268-87e42c1d70b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpc2JvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className={styles.suggestedName}>Beirao Studio Flat</span>
                <span className={styles.suggestedCity}>Lisbon</span>
                <span className={styles.suggestedPrice}>Starting from €190</span>
                <div className={styles.suggestedRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.suggestedItem}>
                <img className={styles.suggestedImg} src="https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <span className={styles.suggestedName}>Hotel Kozel</span>
                <span className={styles.suggestedCity}>Prague</span>
                <span className={styles.suggestedPrice}>Starting from €80</span>
                <div className={styles.suggestedRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

    )
}