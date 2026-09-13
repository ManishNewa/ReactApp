import { useEffect, useState } from "react";
import { movieAPI } from '../../api';

export function MovieSearchBar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function fetchSuggestion() {
            try {
                setSuggestions([]);
                const response = await movieAPI.get('/search/movie', {
                    params: {
                        query: query,
                    },
                });

                setSuggestions(response.data.results.slice(0, 5));
                console.log(suggestions);
            } catch (err) {
                console.log('Error::', err.message);
            }
        }

        fetchSuggestion();
    }, [query]);

    return (
        <div className="relative flex items-center">
            <form className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                    className="bg-black/50 border border-gray-600 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-gray-700 transition-colors w-64"
                />
                <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                {query.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white hover:cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </form>
            {suggestions.length > 0 && (
                <div className="absolute top-full w-full mt-2 bg-[#141414] border border-gray-700 rounded-md shadow-xl overflow-hidden z-50 h-fit">
                    {suggestions.map((movie) => (
                        <div
                            key={movie}
                            className="px-4 py-3 hover:bg-gray-800 cursor-pointer text-sm text-gray-200 transition-colors flex items-center space-x-3"
                        >
                            <div className="w-8 h-12 bg-gray-700 shrink-0">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <span className="truncate">{movie.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
