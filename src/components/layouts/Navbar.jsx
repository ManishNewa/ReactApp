import BrandName from '../common/BrandName';
import BaseButton from '../buttons/BaseButton';

export default function Navbar() {
    const navLinks = ['Home', 'Programs', 'Resources', 'Pricing'];

    return (
        <header className="topbar">
            <BrandName />

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
