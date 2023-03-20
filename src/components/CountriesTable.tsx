import {FaRegHeart, FaAngleRight} from "react-icons/fa";

const CountriesTable = (data:any)=>{
console.log(data)
    return (
        <tr>
            <td>{data.data.name.common}</td>
            <td className="table__flag">{data.data.flag}</td>
            <td>{data.data.continents}</td>
            <td><button><FaRegHeart/></button></td>
            <td><button><FaAngleRight/></button></td>
        </tr>
  

    )}

    export default CountriesTable
