//@ts-nocheck

import Testing from "../components/Testing";
import useFetch from "../components/useFetch";


const Practice = ()=>{

    const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');
    return (
        <div>
            {loading && <p>Loading...</p>} 
            {error ? <p>{error}</p> : <Testing data={data}/> }
        </div>
    )}

    export default Practice