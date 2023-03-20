import Countries from "../components/Countries";
import useFetch from "../components/useFetch"

const Learn = ()=>{
const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');
    return (
        <div>
            {loading && <p>Loading...</p>} 
            {error ? <p>{error}</p> : <Countries data={data}/> }
        </div>

    )}

    export default Learn