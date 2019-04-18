const getHeader = () => {
  const item = window.localStorage.getItem("token");
  const tokenData = JSON.parse(item);
  const headers = {
    Accept: "application/json",
    // Authorization: "Bearer " + tokenData
    // Authorization: 'Bearer ' + tokenData.access_token,
  };
  return headers;
};

const BASE_URL = "https://pokeapi.co/api/v2/";

export {
  getHeader,
  BASE_URL
}