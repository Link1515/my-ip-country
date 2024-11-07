const API_URL = "https://api.country.is/";

interface IpAndCountry {
  ip: string;
  country: string;
}

export const requestIpAndCountry = async () => {
  return await fetch(API_URL).then<IpAndCountry>((res) => res.json());
};
