export default function SummaryItem({
    className,
    label,
    amount,
    isVoucherAdded,
    onVoucherRemove,
}) {
    return (
        <div
            className={`flex justify-between items-center text-md mb-1 ${className}`}
        >
            <div className="flex flex-col gap-1">
                <span className="capitalize text-gray-600">{label}:</span>
                <div className="flex items-center gap-2">
                    {isVoucherAdded && (
                        <div className="flex items-center gap-2 text-xs">
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600">
                                Discount voucher applied
                            </span>

                            <button
                                type="button"
                                onClick={onVoucherRemove}
                                className="text-gray-500 hover:cursor-pointer hover:text-gray-900 underline"
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <span className="font-semibold text-gray-900">
                {amount?.toFixed(2)} USD
            </span>
        </div>
    );
}
