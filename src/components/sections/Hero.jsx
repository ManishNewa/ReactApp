import BaseButton from '../buttons/BaseButton';
import Stat from './stats/Stat';
import MiniCard from '../cards/MiniCard';
import Bars from '../common/Bars';

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
                <MiniCard className="top-card" title="Weekly focus">
                    <strong>85%</strong>
                </MiniCard>

                <MiniCard className="chart-card" title="Study hours">
                    <Bars counts="5"/>
                </MiniCard>

                <MiniCard className="task-card" title="Weekly focus">
                    <ul>
                        <li>Read chapter 4</li>
                        <li>Finish quiz</li>
                    </ul>
                </MiniCard>
            </div>
        </section>
    );
}
