import axios from 'axios';

export const MovieAPI = axios.create({
    baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_API_ACCESS_KEY,
    },
});
