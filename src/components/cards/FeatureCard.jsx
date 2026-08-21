export default function FeatureCard({ order, title, description }) {
    return (
        <article className="feature-card">
            <div className="feature-icon">{order}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
