//@ts-nocheck

const CountryInfo = ({data})=>{
    const {name, flag, population, continents, languages, capital } = data.length && data[0];

    return (
        <>
        {data.length && <article>
        <h1>{name.common}</h1>
        <h1 className="flag">{flag}</h1>
        <div className="info__country">
        <h2>Capital: {capital} </h2>
        <h2>Continent: {continents} </h2>
        <h2>Population: {population} people</h2>
        </div>
        <h2> People there speaks: {languages && <ul> {(Object.values(languages)).map(language =>
    <li key={Math.random()}>{language}</li>)}</ul>}</h2>
        </article>}
        </>)
}

    export default CountryInfo