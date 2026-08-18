export default function FeatureSection() {
    return (
        <section className="features">
            <div className="section-heading">
                <p className="eyebrow">Why students choose us</p>
                <h2>Everything you need to learn with clarity.</h2>
            </div>

            <div className="feature-grid">
                <article className="feature-card">
                    <div className="feature-icon">01</div>
                    <h3>Study smarter</h3>
                    <p>
                        Organize lessons, notes, and deadlines in one calm
                        workspace.
                    </p>
                </article>

                <article className="feature-card">
                    <div className="feature-icon">02</div>
                    <h3>Track progress</h3>
                    <p>
                        See weekly wins and stay focused on the goals that
                        matter most.
                    </p>
                </article>

                <article className="feature-card">
                    <div className="feature-icon">03</div>
                    <h3>Learn with ease</h3>
                    <p>
                        Access simple tools and guided resources designed for
                        busy students.
                    </p>
                </article>
            </div>
        </section>
    );
}
