import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import { MovieDetails } from './components/movie/MovieDetails';
import { MoviePlay } from './components/movie/MoviePlay';

function App() {
    return (
        <main className="border h-dvh bg-[#030712]">
            <BrowserRouter>
                <NavBar />
                <div className="h-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetails />}
                        />
                        <Route
                            path="/movie/:movieId/play"
                            element={<MoviePlay />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
