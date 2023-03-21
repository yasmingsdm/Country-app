//@ts-nocheck

const CountryInfo = ({data})=>{
    const {name, flag, population, continents, languages, capital } = data.length && data[0];
console.log(languages)
// const speak = Object.values(languages).map(language =>
//     <ul><li>{language}</li></ul>)
// console.log(speak)
    return (
        <>
        {data.length && <article>
        <h1>{name.common}</h1>
        <h1 className="flag">{flag}</h1>
        <h2> {name.common} is located in {continents} and has a population of {population} people. </h2>
        <h2> They speak {} and their capital is {capital}.</h2>
        </article>}
        </>)
}

    export default CountryInfo