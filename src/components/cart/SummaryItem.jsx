export default function SummaryItem({ label, amount, className }) {
    return (
        <div className={`flex justify-between items-center text-md mb-1 ${className}`}>
            <span className="capitalize text-gray-600">{label}:</span>
            <span className=" font-semibold text-gray-900">
                {amount?.toFixed(2)} USD
            </span>
        </div>
    );
}
