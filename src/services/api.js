import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend04-06-20204.onrender.com"
});