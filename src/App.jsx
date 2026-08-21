import './App.css';
import Navbar from './components/layouts/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/layouts/Footer';

function App() {
    return (
        <div className="page-shell">
            <Navbar />

            <main className="main-content">
                <Hero />

                <Features />
            </main>

            <Footer />
        </div>
    );
}

export default App;
