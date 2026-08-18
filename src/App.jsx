import './App.css'

function App() {
  return (
    <div className="page-shell">
      {/* Component hint: This navbar can become a Navbar component later. */}
      <header className="topbar">
        <div className="brand">StudyNest</div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Programs</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Pricing</a>
        </nav>

        <button className="nav-button">Get started</button>
      </header>

      <main className="main-content">
        {/* Component hint: This hero section can become a Hero component later. */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">For focused students</p>
            <h1>Build your best study routine.</h1>
            <p className="hero-text">
              A simple place to stay organized, stay motivated, and keep learning
              without the overwhelm.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Start free</button>
              <button className="secondary-button">View demo</button>
            </div>

            <div className="stats">
              <div>
                <strong>12k+</strong>
                <span>students</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>rating</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>support</span>
              </div>
            </div>
          </div>

          <div className="hero-card" aria-label="Study dashboard preview">
            <div className="mini-card top-card">
              <span>Weekly focus</span>
              <strong>85%</strong>
            </div>

            <div className="mini-card chart-card">
              <span>Study hours</span>
              <div className="bars">
                <i className="bar-one" />
                <i className="bar-two" />
                <i className="bar-three" />
                <i className="bar-four" />
                <i className="bar-five" />
              </div>
            </div>

            <div className="mini-card task-card">
              <span>Today</span>
              <ul>
                <li>Read chapter 4</li>
                <li>Finish quiz</li>
              </ul>
            </div>
          </div>
        </section>

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
