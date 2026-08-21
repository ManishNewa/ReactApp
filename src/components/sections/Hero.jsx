import BaseButton from '../buttons/BaseButton';
import Stat from './stats/Stat';

export default function Hero() {
    const stats = [
        {
            id: 1,
            title: 'students',
            value: '12k+',
        },
        {
            id: 2,
            title: 'rating',
            value: '4.9/5',
        },
        {
            id: 3,
            title: 'support',
            value: '24/7',
        },
    ];
    return (
        <section className="hero">
            <div className="hero-copy">
                <p className="eyebrow">For focused students</p>
                <h1>Build your best study routine.</h1>
                <p className="hero-text">
                    A simple place to stay organized, stay motivated, and keep
                    learning without the overwhelm.
                </p>

                <div className="hero-actions">
                    <BaseButton className="primary-button" label="Start free"/>
                    <BaseButton className="secondary-button" label="View demo"/>
                </div>

                <div className="stats">
                    {
                        stats.map((stat)=> (
                            <Stat key={stat.id} {...stat}/>
                        ))
                    }
                </div>
            </div>

            <div className="hero-card" aria-label="Study dashboard preview">
                <div className="mini-card top-card">
                    <span>Weekly focus</span>
                    <strong>85%</strong>
                </div>

                <div className="mini-card chart-card">
                    <span>Study hours</span>
                    <div className="bars">
                        <i className="bar-one" />
                        <i className="bar-two" />
                        <i className="bar-three" />
                        <i className="bar-four" />
                        <i className="bar-five" />
                    </div>
                </div>

                <div className="mini-card task-card">
                    <span>Today</span>
                    <ul>
                        <li>Read chapter 4</li>
                        <li>Finish quiz</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
