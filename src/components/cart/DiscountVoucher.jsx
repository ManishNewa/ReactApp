import { useState } from 'react';

export default function DiscountVoucher({ voucherApplied }) {
    const [voucher, setVoucher] = useState('');

    const hasVoucherValue = voucher.trim() !== '';

    return (
        <div className="flex gap-3">
            <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Discount Voucher"
                className="border rounded-full focus:outline-gray-500 px-3 border-gray-200"
            />
            <button
                disabled={!hasVoucherValue}
                className={`border px-6 py-2 rounded-full font-semibold text-sm ${hasVoucherValue ? 'border-gray-400 hover:cursor-pointer hover:scale-105 ' : 'border-gray-200'}`}
                onClick={() => voucherApplied(voucher)}
            >
                Apply
            </button>
        </div>
    );
}
