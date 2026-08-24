export default function SummaryItem({ label, amount }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{label}</span>
            <span className="font-semibold text-gray-900">{amount}</span>
        </div>
    );
}
