import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import useFetch from '../../hooks/useFetch';
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
    const [minPrice, setMinPrice] = useState(undefined);
    const [maxPrice, setMaxPrice] = useState(undefined);


    const { data, error, reFetch } = useFetch(`http://localhost:4000/api/hotels?city=${destination}&minPrice={minPrice || 0}&maxPrice={maxPrice || 9999}`);

    const handleClick = () => {
        reFetch();
    };

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
                            <input placeholder={destination} type="text" onChange={e => setDestination(e.target.value)} />
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
                            {
                                openDate &&
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
                                <input className={styles.ListSearchOptionInput} type="number" min={0} onChange={e => setMinPrice(e.target.value)} />
                            </div>
                            <div className={styles.ListSearchOptionItem}>
                                <span className={styles.ListSearchOptionText}>
                                    Max Price <small>p/night</small>
                                </span>
                                <input className={styles.ListSearchOptionInput} type="number" min={0} onChange={e => setMaxPrice(e.target.value)} />
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
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className={styles.ListResult}>
                        { 
                            data && data.map( item => (
                                <SearchItem item={item} key={item._id}/>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};