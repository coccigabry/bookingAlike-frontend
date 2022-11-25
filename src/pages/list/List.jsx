import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import SearchItem from '../../components/searchItem/SearchItem';
import Footer from '../../components/footer/Footer';
import styles from './List.module.css';


export default function List() {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [openDate, setOpendDate] = useState(false);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className={styles.ListCnt}>
                <div className={styles.ListWrapper}>
                    <div className={styles.ListSearch}>
                        <h1 className={styles.ListSearchTitle}>Search</h1>
                        <div className={styles.ListSearchItem}>
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className={styles.ListSearchItem}>
                            <label>Check-in Date</label>
                            <span onClick={() => setOpendDate(!openDate)}>
                                {`${format(
                                    date[0].startDate, "dd/MM/yyyy"
                                )} to ${format(
                                    date[0].endDate, "dd/MM/yyyy"
                                )}`}
                            </span>
                            {openDate &&
                                <>
                                    <DateRange
                                        onChange={item => setDate([item.selection])}
                                        ranges={date}
                                        minDate={new Date()}
                                    />                                
                                </>
                            }
                        </div>
                        <div className={styles.ListSearchItem}>
                            <label>Options</label>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>
                                    Min Price <small>p/night</small>
                                </span>
                                <input className={styles.ListSearchOptionInput} type="number" min={0} />
                            </div>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>
                                    Max Price <small>p/night</small>
                                </span>
                                <input className={styles.ListSearchOptionInput} type="number" min={0} />
                            </div>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>Adults</span>
                                <input className={styles.ListSearchOptionInput} type="number" min={1} placeholder={options.adults} />
                            </div>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>Childrens</span>
                                <input className={styles.ListSearchOptionInput} type="number" min={0} placeholder={options.childrens} />
                            </div>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>Rooms</span>
                                <input className={styles.ListSearchOptionInput} type="number" min={1} placeholder={options.rooms} />
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className={styles.ListResult}>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};