import Testing from "../components/Testing";
import useFetch from "../components/useFetch";
import Loading from "./Loading";


const Practice = ()=>{

    const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');
    return (
        <div>
            {loading && <Loading/>} 
            {error ? <p>{error}</p> : <Testing data={data}/> }
        </div>
    )}

    export default Practice