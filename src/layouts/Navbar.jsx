import BaseButton from '../components/buttons/BaseButton';

export default function Navbar() {
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

            <BaseButton className="nav-button" label="Get started" />
        </header>
    );
}
