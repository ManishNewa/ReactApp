export default function DiscountVoucher() {
    return (
        <div className="flex gap-3">
            <input
                type="text"
                placeholder="Discount Voucher"
                className="border rounded-full focus:outline-gray-500 px-3 border-gray-200"
            />
            <button className="border border-gray-200 px-6 py-2 rounded-full font-semibold text-sm hover:cursor-pointer hover:scale-105">
                Apply
            </button>
        </div>
    );
}
