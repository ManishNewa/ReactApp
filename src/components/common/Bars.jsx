export default function Bars({ counts }) {
    const numbers = ['one', 'two', 'three', 'four', 'five'];
    const maxCount = Math.min(counts, 5);

    return (
        <div className="bars">
            {numbers.slice(0, maxCount).map((number) => (
                <i key={number} className={`bar-${number}`} />
            ))}
        </div>
    );
}
