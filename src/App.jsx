import './App.css';
import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import Features from './layouts/Features';
import Footer from './layouts/Footer';

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
