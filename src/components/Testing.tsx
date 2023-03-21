//@ts-nocheck

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Testing = (data)=>{
    const [countryName, setCountryName] = useState('')
    const [index, setIndex] = useState(0)

    const handleChange = (e)=>{
        setCountryName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(countryName.toLowerCase() === data.data[index].name.common.toLowerCase()){
            toast('Great! You did it right!')
            setIndex(prevIndex => prevIndex + 1)
            setCountryName('')
        }else{
            toast('Oh, no! Maybe you need to study a little bit more!')
        }
        
    }

    return (
        <section>
            {data.data.length > 0 && <h1 className="flag">{data.data[index].flag} </h1>}
            <input type='text' placeholder="Type the name of the country" onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <ToastContainer/>
        </section>
       
    )}

    export default Testing