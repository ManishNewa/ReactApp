import BrandName from "../common/BrandName";

export default function Footer() {
    const headerContent = 'Made for learning, one step at a time.';
    const footerLinks = [
        {
            id: 1,
            title: 'Privacy',
            link: '#',
        },
        {
            id: 2,
            title: 'Terms',
            link: '#',
        },
        {
            id: 3,
            title: 'Contact',
            link: '#',
        },
    ];
    return (
        <footer className="footer">
            <BrandName />
            <p>{headerContent}.</p>
            <div className="footer-links">
                {
                    footerLinks.map((footerLink) => (
                        <a key={footerLink.id} href={footerLink.link}>
                            {footerLink.title}
                        </a>
                    ))
                }
            </div>
        </footer>
    );
}
