import Axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Set config defaults when creating the instance
export const http = Axios.create({
  baseURL: BASE_URL
});
