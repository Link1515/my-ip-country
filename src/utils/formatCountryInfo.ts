import type { CountryInfo } from "~/requests/requestCountryInfo";

export const formatCountryInfo = (countryInfo: CountryInfo) => {
  return {
    name: countryInfo.name.common,
    capital: countryInfo.capital.join(", "),
    region: countryInfo.subregion,
    currency: Object.values(countryInfo.currencies)
      .map((currency) => currency.name)
      .join(", "),
    flag: countryInfo.flags.svg,
    flagIcon: countryInfo.flag,
    language: Object.values(countryInfo.languages).join(", "),
    map: countryInfo.maps.googleMaps,
    population: countryInfo.population,
  };
};
