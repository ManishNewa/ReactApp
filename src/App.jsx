import './App.css';
import Navbar from './components/layouts/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/layouts/Footer';

function App() {
    const brandName = 'StudyNest';

    return (
        <div className="page-shell">
            <Navbar brandName={brandName} />

            <main className="main-content">
                <Hero />

                <Features />
            </main>

            <Footer brandName={brandName} />
        </div>
    );
}

export default App;
