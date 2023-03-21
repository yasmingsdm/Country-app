import { useParams } from "react-router-dom";

import CountryInfo from "../components/CountryInfo";
import useFetch from "../components/useFetch";

const Country = ()=>{
    const {country} = useParams();
    const {data, loading, error} = useFetch(`https://restcountries.com/v3.1/name/${country}`);
    return (
        <div>
            {loading && <p>Loading...</p>} 
            {error ? <p>{error}</p> : <CountryInfo data={data}/> }
        </div>
    )}

    export default Country

