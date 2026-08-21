export default function Stat({ title, value }) {
    return (
        <div>
            <strong>{value}</strong>
            <span>{title}</span>
        </div>
    );
}
