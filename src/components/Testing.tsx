//@ts-nocheck

import { useState } from "react"

const Testing = (data)=>{
    const [countryName, setCountryName] = useState('')

    const handleChange = ()=>{
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

    }
    return (
        <section>
            {data.data.length > 0 && <h1 className="flag">{data.data[0].flag} </h1>}
            <input type='text' placeholder="Type the name of the country" onChange={handleChange}/>
            <button onSubmit={handleSubmit}>Submit</button>
        </section>
       
    )}

    export default Testing