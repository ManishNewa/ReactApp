import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Trending } from '../components/Trending';
import { movieAPI } from '../api';

export function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchTrendingMovies() {
            try {
                setIsLoading(true);
                const response = await movieAPI.get('/trending/movie/week');
                setTrendingMovies(response.data.results);
            } catch (err) {
                console.log('error::', err.message);
            } finally {
                setIsLoading(true);
            }
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
