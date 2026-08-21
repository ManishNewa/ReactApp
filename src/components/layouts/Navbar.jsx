import BaseButton from '../buttons/BaseButton';

export default function Navbar({ brandName }) {
    const navLinks = ['Home', 'Programs', 'Resources', 'Pricing'];
    return (
        <header className="topbar">
            <div className="brand">{brandName}</div>

            <nav className="nav" aria-label="Main navigation">
                {
                    navLinks.map((navLink)=> (
                        <a key={navLink} href="#" className="nav-link">
                            {navLink}
                        </a>
                    ))
                }
            </nav>

            <BaseButton className="nav-button" label="Get started" />
        </header>
    );
}
