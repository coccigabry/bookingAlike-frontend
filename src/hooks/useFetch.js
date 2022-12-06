import Axios from 'axios';
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.get(url);
                setData(res.data);
            } catch (err) {               
                setError(err);
            };
        };
        fetchData();
    }, []);

    const reFetch = async () => {
        try {
            const res = await Axios.get(url);
            setData(res.data);
        } catch (err) {               
            setError(err);
        };
    };

    return { data, error, reFetch };

};

export default useFetch;