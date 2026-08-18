import './App.css'
import Navbar from './layouts/Navbar';
import HeroSection from './layouts/HeroSection';
import FeatureSection from './layouts/FeatureSection';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="page-shell">
      <Navbar/>

      <main className="main-content">
        <HeroSection/>

        <FeatureSection/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
