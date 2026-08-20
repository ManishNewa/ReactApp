export default function FeatureCard({ feature }) {
    return (
        <article className="feature-card">
            <div className="feature-icon">{feature.order}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        </article>
    );
}
