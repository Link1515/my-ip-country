const API_URL = "https://api.country.is/";

interface Response {
  ip: string;
  country: string;
}

export const requestIpAndCountry = async () => {
  return await fetch(API_URL).then<Response>((res) => res.json());
};
