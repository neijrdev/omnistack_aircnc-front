import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333" || "https://omnistackheroku.herokuapp.com",
});

export default api;
