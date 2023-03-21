//@ts-nocheck

const CountryInfo = ({data})=>{
    const {name, flag, population, continents, languages, capital } = data.length && data[0];
console.log(languages)
// const speak = languages.map(language =>
//     <ul><li>{language}</li></ul>)
// console.log(speak)
    return (
        <>
        {data.length && <article>
        <h1>{name.common}</h1>
        <h1 className="flag">{flag}</h1>
        <p>
            {name.common} is located in {continents} and has a population of {population} people. They
            speak {} and their capital is {capital}.
        </p>
        </article>}
        </>)
}

    export default CountryInfo