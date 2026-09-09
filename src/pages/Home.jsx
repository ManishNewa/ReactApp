import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Trending } from '../components/Trending';
import { movieAPI } from '../api';

export function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTrendingMovies() {
            try {
                const response = await movieAPI.get('/trending/movie/week');
                setTrendingMovies(response.data.results);
            } catch (err) {
                console.log('error::', err.message);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }
        }

        fetchTrendingMovies();
    }, []);

    return (
        <div className="h-full overflow-hidden">
            <Hero movie={trendingMovies[0]} isLoading={isLoading} />
            <Trending movies={trendingMovies} />
        </div>
    );
}
