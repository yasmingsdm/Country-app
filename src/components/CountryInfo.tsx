//@ts-nocheck

const CountryInfo = (data)=>{
console.log(data)
const {name, flag, population, continents, languages, capital} = data.data
    return (
        <article>
            <h1>{name}</h1>
            <h1 className="flag">{flag}</h1>
            <p>{name} is located in {continents} and has a population of {population} people. They speak {languages} and their capital is {capital}.</p>

        
        </article>
        
    )}

    export default CountryInfo