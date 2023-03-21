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
        <div className="page">
            <img className="main__img" src="https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="world"/>
            <div className="main__btns">
            <button onClick={learn}>Learn</button>
            <button onClick={practice}>Practice</button>
            </div>
        </div>
   
    )
}

    export default Main