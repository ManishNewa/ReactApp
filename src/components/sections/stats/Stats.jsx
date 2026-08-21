import Stat from './Stat';

export default function Stats({stats}) {
    return (
        <div className="stats">
            {
                stats.map((stat) => (
                    <Stat key={stat.id} {...stat} />
                ))
            }
        </div>
    );
}
