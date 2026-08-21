export default function MiniCard({ title, className, children }) {
    return (
        <div className={`mini-card ${className}`}>
            <span>{title}</span>
            {children}
        </div>
    );
}
