
import { useEffect, useState } from "react"

import { CountriesProps } from "../types"
import CountriesTable from "./CountriesTable"



const Countries = (data:CountriesProps)=>{
    let list = []
    const [countryList, setCountryList] = useState(data.data)

    useEffect(()=>{
        setCountryList(data.data)
    },[data.data])

    const handleSearch =(e: React.ChangeEvent<HTMLInputElement>)=>{
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
                        <th className="disapear">Flag</th>
                        <th className="disapear">Continent</th>
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