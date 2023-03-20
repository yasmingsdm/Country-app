import { CountriesType } from "../types"

const Countries = (data: CountriesType[])=>{
   
console.log(data)

    return (
        <div>
            <h1>Countries</h1>
              {/* {data && <p>{data[0].name.common} Hahaha</p>} */}
        </div>
    
    )}

    export default Countries