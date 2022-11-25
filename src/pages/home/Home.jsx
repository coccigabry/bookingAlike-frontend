import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Suggested from '../../components/suggested/Suggested';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import PropertyList from '../../components/propertyList/PropertyList';

import styles from './Home.module.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={styles.homeContainer}>
                <Featured />
                <h1 className={styles.homeTitle}>Browse by property type</h1>
                <PropertyList />
                <h1 className={styles.homeTitle}>Homes guests love</h1>
                <Suggested />
                <MailList />
                <Footer />
            </div>
        </div>
    )
};