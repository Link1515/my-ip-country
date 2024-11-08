const API_URL = "https://ipinfo.io/ip";

export const requestIp = async () => {
  return await fetch(API_URL).then<string>((res) => res.text());
};
