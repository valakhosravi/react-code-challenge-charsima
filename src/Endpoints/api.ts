import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/';

export const getUsers = function() {
    return axios.get(`${API_URL}users`);
}

export const getProducts = function() {
    return axios.get(`${API_URL}products`);
}
