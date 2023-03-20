import {FaRegMoon} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ()=>{

    return (
    <header>
        <nav>
            <ul>
                <NavLink to='./learn'>Learn</NavLink>
                <NavLink to='./practice'>Practice</NavLink>
                <NavLink to='./favorite'>Favorites</NavLink>
                <button><FaRegMoon/></button>
            </ul>
        </nav>
        <h1 className="header__title">Country App</h1>
    </header>
    )}

    export default Header