//@ts-nocheck
import { useState } from "react";
import {FaRegHeart, FaAngleRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CountriesTable = (data)=>{
const [favoriteCountries, setFavoriteCountries] = useState([]) 
const [heart, setHeart] = useState('noFav')

const handleFavorite = (name)=>{
     if(heart==='noFav'){
        toast('Country added to the favorite!')
        setFavoriteCountries(prev => {return [...prev,  name]} )
        console.log(favoriteCountries)
        setHeart('fav')
    } else { 
        toast('Country removed from the favorite!')
        setFavoriteCountries(favoriteCountries.filter(country => country.name !== name))
        console.log(favoriteCountries)
        setHeart('noFav')

    }

}
    return (
        <tr>
            <td>{data.data.name.common}</td>
            <td className="table__flag">{data.data.flag}</td>
            <td>{data.data.continents}</td>
            <td><button onClick={()=>handleFavorite(data.data.name.common)} className={heart}><FaRegHeart/></button></td>
            <td><Link to={'/' + data.data.name.common}><FaAngleRight/></Link></td>
            <ToastContainer/>
        </tr>
  

    )}

    export default CountriesTable
