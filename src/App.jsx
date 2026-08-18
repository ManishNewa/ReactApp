import './App.css'
import Navbar from './layouts/Navbar';
import HeroSection from './layouts/HeroSection';

function App() {
  return (
    <div className="page-shell">
      <Navbar/>

      <main className="main-content">
        <HeroSection/>

        {/* Component hint: This feature section can become a Features component later. */}
        <section className="features">
          <div className="section-heading">
            <p className="eyebrow">Why students choose us</p>
            <h2>Everything you need to learn with clarity.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Study smarter</h3>
              <p>Organize lessons, notes, and deadlines in one calm workspace.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Track progress</h3>
              <p>See weekly wins and stay focused on the goals that matter most.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">03</div>
              <h3>Learn with ease</h3>
              <p>Access simple tools and guided resources designed for busy students.</p>
            </article>
          </div>
        </section>
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
