
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TestingProps } from "../types";


const Testing = (props:TestingProps)=>{
    const {data} = props
    const [countryName, setCountryName] = useState('')
    const [index, setIndex] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> )=>{
        setCountryName(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(countryName.toLowerCase() === data[index].name.common.toLowerCase()){
            toast('Great! You did it right!')
            
            
        }else{
            toast('Oh, no! Maybe you need to study a little bit more!')
        }
        setIndex(Math.floor(Math.random()*250))
        setCountryName('')
    }

    return (
        <section className="page">
            {data.length > 0 && <h1 className="flag">{data[index].flag} </h1>}
            <input type='text' placeholder="Type the name of the country" value={countryName} onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <ToastContainer/>
        </section>
       
    )}

    export default Testing