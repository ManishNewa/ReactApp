export default function SummaryItem({ label, amount }) {
    return (
        <div className="flex justify-between items-center text-md">
            <span className="capitalize font-bold text-gray-600">{label}:</span>
            <span className="font-semibold text-gray-900">{amount?.toFixed(2)}</span>
        </div>
    );
}
