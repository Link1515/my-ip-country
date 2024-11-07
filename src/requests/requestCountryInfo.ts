const API_URL =
  "https://restcountries.com/v3.1/alpha/<country>?fields=name,currencies,capital,capitalInfo,region,subregion,languages,maps,population,flag,flags";

interface CountryInfo {
  name: Name;
  capital: string[];
  capitalInfo: CapitalInfo;
  region: string;
  subregion: string;
  currencies: { [abbreviation: string]: Currencies };
  flag: string;
  flags: Flags;
  languages: { [abbreviation: string]: string };
  maps: Maps;
  population: number;
}

interface Name {
  common: string;
  official: string;
}

interface CapitalInfo {
  latlng: [latitude: number, longitude: number];
}

interface Currencies {
  name: string;
  symbol: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export const requestCountryInfo = async (country: string) => {
  return await fetch(API_URL.replace("<country>", country)).then<CountryInfo>(
    (res) => res.json(),
  );
};
