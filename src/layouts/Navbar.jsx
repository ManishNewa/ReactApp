function Navbar() {
    return (
        <header className="topbar">
            <div className="brand">StudyNest</div>

            <nav className="nav" aria-label="Main navigation">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    Programs
                </a>
                <a href="#" className="nav-link">
                    Resources
                </a>
                <a href="#" className="nav-link">
                    Pricing
                </a>
            </nav>

            <button className="nav-button">Get started</button>
        </header>
    );
}

export default Navbar;
