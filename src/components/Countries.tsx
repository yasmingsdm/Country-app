
import CountriesTable from "./CountriesTable"

const Countries = (data:any)=>{
   
console.log(data)

    return (
        <div>
            {data.data.length > 0 && 
            <table>
                <tr>
                    <th>Country</th>
                    <th>Flag</th>
                    <th>Continent</th>
                    <th>Favorite</th>
                    <th>More info</th>
                </tr>
                   { data.data.map((data:any) => (
                        <CountriesTable data={data} key={Math.random()}/>
                    ))}
            </table>} 
        </div>
    
    )}

    export default Countries