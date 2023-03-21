import Countries from "../components/Countries";
import useFetch from "../components/useFetch"
import Loading from "./Loading";

const Learn = ()=>{
const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');
    return (
        <div>
            {loading && <Loading/>} 
            {error ? <p>{error}</p> : <Countries data={data}/> }
        </div>

    )}

    export default Learn