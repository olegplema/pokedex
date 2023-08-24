import axios from "axios";

export const url = 'https://pokeapi.co/api/v2'

export const axios_instance = axios.create({
    baseURL:url,
})