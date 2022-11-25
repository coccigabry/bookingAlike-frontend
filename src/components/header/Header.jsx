import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faMap, faBus, faSearch, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



export default function Header({ type }) {

    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        childrens: 0,
        rooms: 1
    });

    const navigate = useNavigate();

    const counter = (key, action) => {
        setOptions((options) => {
            return {
                ...options,
                [key]: action === "i" ? options[key] + 1 : options[key] - 1
            }
        })

    }

    const handleSearch = () => {
        navigate("/hotels", { state:{ destination, date, options } });
    }


    return (
        <div className={styles.header}>
            <div className={type === "list" ? styles.headerContainerListMode : styles.headerContainer }>

                <div className={styles.headerList}>
                    <div className={`${styles.headerListItem} && ${styles.active}`}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Accomodations</span>
                    </div>
                    <div className={styles.headerListItem}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className={styles.headerListItem}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className={styles.headerListItem}>
                        <FontAwesomeIcon icon={faMap} />
                        <span>Attractions</span>
                    </div>
                    <div className={styles.headerListItem}>
                        <FontAwesomeIcon icon={faBus} />
                        <span>Airport Shuttles</span>
                    </div>
                </div>

                { type !== "list" &&
                    <>
                        <h1 className={styles.headerTitle}>
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className={styles.headerDescr}>
                            Get rewarded for your travels- unlock instant 10% saving with a free CocciBooking account
                        </p>
                        <button className={styles.headerBtn}>Sign in / Register</button>

                        <div className={styles.headerSearch}>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faSearch} className={styles.headerIcon} />
                                <input
                                    className={styles.headerSearchInput}
                                    type="text"
                                    placeholder="Where are you going?"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div onClick={() => setOpenDate(!openDate)} className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
                                <span className={styles.headerSearchText}>{`${format(
                                    date[0].startDate, "dd/MM/yyyy"
                                )} to ${format(
                                    date[0].endDate, "dd/MM/yyyy"
                                )}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    className={styles.date}
                                />}
                            </div>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
                                <span onClick={() => setOpenOptions(!openOptions)} className={styles.headerSearchText}>{`${options.adults} adults - ${options.childrens} childrens - ${options.rooms} rooms`}</span>
                                {openOptions && <div className={styles.options}>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Adults</span>
                                        <div className={styles.optionCounter}>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("adults", "i")}
                                            >
                                                +
                                            </button>
                                            <span className={styles.optionCounterNumber}>{options.adults}</span>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("adults", "d")}
                                                disabled={options.adults <= 1}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Childrens</span>
                                        <div className={styles.optionCounter}>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("childrens", "i")}
                                            >
                                                +
                                            </button>
                                            <span className={styles.optionCounterNumber}>{options.childrens}</span>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("childrens", "d")}
                                                disabled={options.childrens <= 0}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.optionItem}>
                                        <span className={styles.optionText}>Rooms</span>
                                        <div className={styles.optionCounter}>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("rooms", "i")}
                                            >
                                                +
                                            </button>
                                            <span className={styles.optionCounterNumber}>{options.rooms}</span>
                                            <button
                                                className={styles.optionCounterBtn}
                                                onClick={() => counter("rooms", "d")}
                                                disabled={options.rooms <= 1}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className={styles.headerSearchItem}>
                                <button className={styles.headerBtn} onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

