const API_URL = "https://api.country.is/";

interface IpAndCountry {
  ip: string;
  country: string;
}

export const requestCountryByIp = async (ip: string) => {
  return await fetch(API_URL + ip).then<IpAndCountry>((res) => res.json());
};
