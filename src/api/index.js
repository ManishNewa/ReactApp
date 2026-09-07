import axios from 'axios';

export const MovieAPI = axios.create({
    baseURL: import.meta.env.MOVIE_BASE_URL,
});
