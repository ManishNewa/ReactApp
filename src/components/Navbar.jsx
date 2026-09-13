import { Link } from 'react-router-dom';
import { MovieSearchBar } from './movie/MovieSearch';

export function NavBar() {
    return (
        <div className="fixed top-0 right-0 w-full flex justify-between p-4 z-99">
            <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="MOVORA Logo"
                        className="h-8 object-contain"
                    />
                </Link>
                <Link
                    to="/"
                    className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors"
                >
                    MOVIES
                </Link>
                <Link
                    to="/"
                    className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors"
                >
                    SERIES
                </Link>
                <Link
                    to="/"
                    className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors"
                >
                    KIDS
                </Link>
                <Link
                    to="/"
                    className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 text-sm font-bold tracking-wider hover:from-purple-300 hover:to-pink-500 transition-colors  ml-4"
                >
                    AI MATCHMAKER
                </Link>
            </div>

            <div className="flex items-center space-x-6">
                <MovieSearchBar />

                <button className="w-8 h-8 rounded-full overflow-hidden border border-gray-500">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </div>
    );
}
