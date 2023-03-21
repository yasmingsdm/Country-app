import {useState, useEffect} from "react";

import { CountryType } from "../types";


const useFetch = (url: string)=>{
    const [data, setData] = useState<CountryType[]>([]);
    const [error, setError] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching failed');
                }
                return res.json();
            })
            .then((json) => {
                setLoading(false);
                setError(null);
                setData(json);
            })
            .catch((e) => {
                setData([]);
                setLoading(false);
                setError(e.message);
            });
    }, [url]);

    return (
        {data, loading, error}
    );
}

export default useFetch;