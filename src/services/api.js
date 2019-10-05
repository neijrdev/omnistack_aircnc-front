import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistackheroku.herokuapp.com" 
});

export default api;
