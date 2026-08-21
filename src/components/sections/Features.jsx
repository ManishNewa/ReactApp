import FeatureCard from '../cards/FeatureCard';

export default function FeatureSection() {
    const content = {
        title: 'Why students choose us',
        heading: 'Everything you need to learn with clarity.',
    };
    const features = [
        {
            order: '01',
            title: 'Study smarter',
            description:
                'See weekly wins and stay focused on the goals that matter most.',
        },
        {
            order: '02',
            title: 'Track progress',
            description:
                'See weekly wins and stay focused on the goals that matter most.',
        },
        {
            order: '03',
            title: 'Learn with ease',
            description:
                'Access simple tools and guided resources designed for busy students.',
        },
    ];
    return (
        <section className="features">
            <div className="section-heading">
                <p className="eyebrow">{content.title}</p>
                <h2>{content.heading}</h2>
            </div>

            <div className="feature-grid">
                {
                    features.map((feature) => (
                        <FeatureCard key={feature.order} {...feature} />
                    ))
                }
            </div>
        </section>
    );
}
