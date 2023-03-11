import { useNavigate } from "react-router-dom";


const Error =()=>{
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate('/')
    }
    return(
        <div>
        <h1>Page not found</h1>
        <button type='reset' onClick={goBack} >HOME</button>
        
        </div>
        
    )
}

export default Error