
 export type CountryType = {
     name: nameType;
     capital: string[];
     continent: string[];
     population: number;
    languages: string; 
    flag: string
};

 export type nameType = {
    common: string;
    official: string;
 }

 export interface CountriesTableProps {
    data:CountryType[]
}

export interface CountriesProps {
    data:CountryType[]
}

export interface TestingProps {
    data:CountryType[]
}