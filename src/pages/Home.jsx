import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Trending } from '../components/Trending';
import { movieAPI } from '../api';

export function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function fetchTrendingMovies() {
            const response = await movieAPI.get('/trending/movie/week');
            setTrendingMovies(response.data.results);
        }

        fetchTrendingMovies();
    }, []);

    return (
        <div className="h-full overflow-hidden">
            <Hero />
            <Trending />
        </div>
    );
}
