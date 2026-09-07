import axios from 'axios';

export const MovieAPI = axios.create({
    baseURL: import.meta.env.MOVIE_BASE_URL,
    params: {
        api_key: import.meta.env.API_ACCESS_TOKEN,
    },
});
