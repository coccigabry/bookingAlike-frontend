import React, { useState } from 'react';
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

    const photosArr = [
        {
            src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1623625434531-d130448273c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
    ];


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
                {openSlider &&
                    <>
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
                                    src={photosArr[slideNum].src}
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
                    </>
                }
                <div className={styles.HotelWrapper}>
                    <h1 className={styles.HotelTitle}>Zen Garden Studio Flat</h1>
                    <button className={styles.bookNow}>Book Now!</button>
                    <div className={styles.HotelAddress}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className={styles.HotelDistance}>
                        Excellent location - 500m from center
                    </span>
                    <span className={styles.HotelPriceHighlight}>
                        Book a stay over €114 at this property and get a free airport shuttle
                    </span>
                    <div className={styles.HotelImages}>
                        {photosArr.map((photo, i) => (
                            <div className={styles.HotelImgWrapper}>
                                <img
                                    src={photo.src}
                                    alt=""
                                    className={styles.HotelImg}
                                    onClick={() => handleSliderOpening(i)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.HotelDetails}>
                        <div className={styles.HotelDetailsText}>
                            <h1 className={styles.HotelDetailsTitle}>Stay in the heart of Krakow</h1>
                            <p className={styles.HotelDetailsDescr}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis.
                                Semper auctor neque vitae tempus quam. Dignissim sodales ut eu sem integer. Faucibus vitae
                                aliquet nec ullamcorper sit amet. Ipsum nunc aliquet bibendum enim facilisis. Sodales neque
                                sodales ut etiam sit amet nisl. Nam aliquam sem et tortor. Imperdiet proin fermentum leo
                                vel orci porta non pulvinar. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
                                Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Lectus sit amet
                                est placerat in egestas erat imperdiet sed. Vestibulum sed arcu non odio euismod acinia at.
                                Enim sed faucibus turpis in eu mi bibendum neque.
                            </p>
                        </div>
                        <div className={styles.HotelDetailsPrice}>
                            <h1>Perfect for a fortnight stay!</h1>
                            <span>
                                Located in the heart of Krakow, this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>€ 1345</b> (14 nights)
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