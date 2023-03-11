import { useNavigate } from "react-router-dom";

const Main = ()=>{
    const navigate = useNavigate()

    const learn = ()=>{
        navigate('/learn')
    }

    const practice = ()=>{
        navigate('/practice')
    }

    return (
        <div>
            <h1>Main</h1>
            <button onClick={learn}>Learn</button>
            <button onClick={practice}>Practice</button>
        </div>
   
    )}

    export default Main