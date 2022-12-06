import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Hotel.module.css';



export default function Hotel() {

    const [slideNum, setSlideNum] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);

    const location = useLocation();
    const hotelId = location.pathname.split("/")[2];

    const { data, error, reFetch } = useFetch(`http://localhost:4000/api/hotels/find/${hotelId}`);

    const { date, city, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    };

    const guestDays = dayDifference(date[0].endDate, date[0].startDate);

    const handleSliderOpening = (i) => {
        setSlideNum(i);
        setOpenSlider(true);
    };

    const handleSliderMove = (direction) => {
        let newSlideNum;

        if (direction === "l") {
            newSlideNum = slideNum === 0 ? 5 : slideNum - 1;
        } else {
            newSlideNum = slideNum === 5 ? 0 : slideNum + 1;
        }

        setSlideNum(newSlideNum);
    };


    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className={styles.HotelCnt}>
                {
                    openSlider &&
                    <div className={styles.Slider}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={styles.SliderClose}
                            onClick={() => setOpenSlider(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className={styles.SliderArrow}
                            onClick={() => handleSliderMove("l")}
                        />
                        <div className={styles.SliderWrapper}>
                            <img
                                src={data.photos[slideNum]}
                                alt=""
                                className={styles.SliderImg}
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className={styles.SliderArrow}
                            onClick={() => handleSliderMove("r")}
                        />
                    </div>
                }
                <div className={styles.HotelWrapper}>
                    <h1 className={styles.HotelTitle}>
                        {data.name}
                    </h1>
                    <button className={styles.bookNow}>Book Now!</button>
                    <div className={styles.HotelAddress}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>
                            {data.address}
                        </span>
                    </div>
                    <span className={styles.HotelDistance}>
                        Excellent location - {data.distanceCityCenter} from center
                    </span>
                    <span className={styles.HotelPriceHighlight}>
                        Book a stay over € {data.cheapestPrice} at this property and get a free airport shuttle
                    </span>
                    <div className={styles.HotelImages}>
                        {
                            data.photos?.map((photo, i) => (
                                <div className={styles.HotelImgWrapper} key={i}>
                                    <img
                                        src={data.photos}
                                        alt=""
                                        className={styles.HotelImg}
                                        onClick={() => handleSliderOpening(i)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.HotelDetails}>
                        <div className={styles.HotelDetailsText}>
                            <h1 className={styles.HotelDetailsTitle}>
                                {data.title}
                            </h1>
                            <p className={styles.HotelDetailsDescr}>
                                {data.descr}
                            </p>
                        </div>
                        <div className={styles.HotelDetailsPrice}>
                            <h1>Perfect for a {guestDays}-nights stay!</h1>
                            <span>
                                Located in the heart of {city}, this property has an excellent location score of {data.rating}!
                            </span>
                            <h2>
                                <b>€ { guestDays * data.cheapestPrice * options.rooms }</b> ({guestDays} nights)
                            </h2>
                            <button>Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
};