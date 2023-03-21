//@ts-nocheck
import { useEffect, useState } from "react"
import CountriesTable from "./CountriesTable"

const Countries = (data:any)=>{
    let list = []
    const [countryList, setCountryList] = useState(data.data)

    useEffect(()=>{
        setCountryList(data.data)
    },[data.data])

    const handleSearch =(e)=>{
        console.log(e.target.value)
        list = data.data.filter(data=>data.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        setCountryList(list)
    }
    
    return (
        <div>
            <input type='text' placeholder="Search" onChange={handleSearch}/>
            {data.data.length > 0 && 
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Flag</th>
                        <th>Continent</th>
                        <th>Favorite</th>
                        <th>More info</th>
                    </tr>
                </thead>
                <tbody>
                    <CountriesTable data={countryList}/>
                </tbody>
            </table>} 
        </div>
    
    )}

    export default Countries