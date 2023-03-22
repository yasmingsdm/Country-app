
import { FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CountryType } from "../types"


const Favorite = ()=>{
    const favouriteList = localStorage.getItem('favoriteCountry')
    const result: CountryType[] = favouriteList ? JSON.parse(favouriteList): []

    const favoriteCountries = result.map(country =>(  
        <tr key={Math.random()}>
            <td>{country.name.common}</td>
            <td className="table__flag">{country.flag}</td>
            <td className="disapear">{country.continents}</td>
            <td><Link to={'/' + country.name.common}><FaAngleRight/></Link></td>
        </tr>))
    
    return (
        <table className="page">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Flag</th>
                    <th className="disapear">Continent</th>
                    <th>More info</th>
                </tr>
            </thead>
            <tbody>
                {favoriteCountries}
            </tbody>
        </table>
    )}

    export default Favorite