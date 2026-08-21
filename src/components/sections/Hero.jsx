import BaseButton from '../buttons/BaseButton';
import Stats from './stats/Stats';
import MiniCard from '../cards/MiniCard';
import Bars from '../common/Bars';

export default function Hero() {
    const content = {
        title: 'For focused students',
        header: 'Build your best study routine',
        description:
            'A simple place to stay organized, stay motivated, and keep learning without the overwhelm.',
    };
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
    const tasks = [
        {
            id: 1,
            title: 'Read chapter 4',
        },
        {
            id: 2,
            title: 'Finish quiz',
        },
    ];

    return (
        <section className="hero">
            <div className="hero-copy">
                <p className="eyebrow">{content.title}</p>
                <h1>{content.header}.</h1>
                <p className="hero-text"> {content.description}</p>

                <div className="hero-actions">
                    <BaseButton type="primary" label="Start free" />
                    <BaseButton type="secondary" label="View demo" />
                </div>
                
                <Stats stats={stats}/>                
            </div>

            <div className="hero-card" aria-label="Study dashboard preview">
                <MiniCard className="top-card" title="Weekly focus">
                    <strong>85%</strong>
                </MiniCard>

                <MiniCard className="chart-card" title="Study hours">
                    <Bars counts="5" />
                </MiniCard>

                {tasks.length > 0 && (
                    <MiniCard className="task-card" title="Weekly focus">
                        <ul>
                            {
                                tasks.map((task) => (
                                    <li key={task.id}>{task.title}</li>
                                ))
                            }
                        </ul>
                    </MiniCard>
                )}
            </div>
        </section>
    );
}
