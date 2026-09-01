export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <div className="logo-icon"></div>
            </div>
            <nav className="nav-links">
                <a href="#" className="nav-item">
                    <i class="fa-solid fa-house"></i>
                </a>
                <a href="#" className="nav-item active">
                    <i class="fa-regular fa-clipboard"></i>
                </a>
                <a href="#" className="nav-item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </a>
                <a href="#" className="nav-item">
                    <i class="fa-regular fa-circle-check"></i>
                </a>
                <a href="#" className="nav-item">
                    <i class="fa-regular fa-calendar"></i>
                </a>
            </nav>
            <div className="sidebar-bottom">
                <a href="#" className="nav-item">
                    <i class="fa-solid fa-gear"></i>
                </a>
            </div>
        </aside>
    );
}
