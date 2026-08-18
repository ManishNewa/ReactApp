import './App.css'
import Navbar from './layouts/Navbar';
import HeroSection from './layouts/HeroSection';
import FeatureSection from './layouts/FeatureSection';

function App() {
  return (
    <div className="page-shell">
      <Navbar/>

      <main className="main-content">
        <HeroSection/>
        
        <FeatureSection/>
      </main>

      {/* Component hint: This footer can become a Footer component later. */}
      <footer className="footer">
        <div className="brand">StudyNest</div>
        <p>Made for learning, one step at a time.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
