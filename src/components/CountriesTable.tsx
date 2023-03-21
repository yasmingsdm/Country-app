//@ts-nocheck

import { useEffect, useState } from "react";
import {FaRegHeart, FaAngleRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CountriesTable = (data)=>{
    const [favoriteCountries, setFavoriteCountries] = useState([]) 

    useEffect(()=>{  
        const favouriteList = localStorage.getItem('favoriteCountry')
        const result = favouriteList ? JSON.parse(favouriteList):[]
        setFavoriteCountries(result)},[])

    useEffect(()=>{
        localStorage.setItem('favoriteCountry', JSON.stringify(favoriteCountries))
    },[favoriteCountries])
   

    const handleFavorite = (country)=>{
        if(!favoriteCountries.includes(country)){
            toast('Country added to the favorite!')
            setFavoriteCountries(prev => {return [...prev,  country]} )
            
        } else { 
            toast('Country removed from the favorite!')
            setFavoriteCountries(favoriteCountries.filter(countryList => countryList !== country))
        }  
    }

    const favoriteColor = (data)=>{
        if(favoriteCountries.includes(data)){
            return true
        } else { return false}
    }

    const anyName = data.data.map(data =>(
        <tr key={Math.random()}>
            <td>{data.name.common}</td>
            <td className="table__flag disapear">{data.flag}</td>
            <td className="disapear">{data.continents}</td>
            <td><button onClick={()=>handleFavorite(data)} className={favoriteColor(data)? 'fav': ''}><FaRegHeart/></button></td>
            <td><Link to={'/' + data.name.common}><FaAngleRight/></Link></td>
        </tr>
    ))

    return (
        <>
        {anyName}
         <ToastContainer/>
        </>
    )
}

    export default CountriesTable
