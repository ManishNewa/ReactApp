import { useState } from 'react';

import { ShieldIcon } from '../icons/Icons';
import DiscountVoucher from './DiscountVoucher';
import SummaryItem from './SummaryItem';

const deliveryFee = 100;
const validVouchers = [
    { key: 'DISCOUNT20', value: 20 },
    { key: 'DISCOUNT30', value: 30 },
    { key: 'DISCOUNT40', value: 40 },
    { key: 'DISCOUNT50', value: 50 },
];

export default function SummarySection({ subTotalAmount, className }) {
    const [discountPercent, setDiscountPercent] = useState(10);

    const discountAmount = (discountPercent / 100) * subTotalAmount;
    const totalAmount = subTotalAmount - discountAmount + deliveryFee;
    const isVoucherAdded = discountPercent > 10;

    function handleVoucher(voucherKey) {
        const validVoucherKeys = validVouchers.map((voucher) => voucher.key);
        if (validVoucherKeys.includes(voucherKey)) {
            const voucher = validVouchers.find(
                (validVoucher) => validVoucher.key === voucherKey,
            );
            setDiscountPercent(voucher.value);
        } else {
            alert('Invalid voucher coupon');
        }
    }

    function removeVoucher() {
        setDiscountPercent(10);
    }

    return (
        <div className={className}>
            <div className="border border-gray-300 rounded-3xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Order Summary
                </h2>

                <DiscountVoucher voucherApplied={handleVoucher} />

                <div className="flex flex-col gap-3 my-6">
                    <SummaryItem label="sub amount" amount={subTotalAmount} />
                    <SummaryItem
                        label={`discount (${discountPercent}%)`}
                        amount={discountAmount}
                        isVoucherAdded={isVoucherAdded}
                        onVoucherRemove={removeVoucher}
                    />
                    <SummaryItem label="delivery fee" amount={deliveryFee} />
                    <SummaryItem
                        className="border-t border-gray-200 pt-4 mt-3 font-bold text-lg"
                        label="total"
                        amount={totalAmount}
                    />
                </div>
                <div className="flex items-start gap-3 mb-6 bg-gray-50/50 p-2 rounded-xl text-xs text-gray-600">
                    <div className="shrink-0 mt-0.5 text-gray-400">
                        <ShieldIcon />
                    </div>
                    <p>
                        90 Day Limited Warranty against manufacturer's defects{' '}
                        <a
                            href="#"
                            className="font-semibold underline decoration-gray-300 hover:text-black"
                        >
                            Details
                        </a>
                    </p>
                </div>
                <button className="rounded-full px-6 py-3 w-full bg-gray-900 text-white text-lg font-semibold hover:cursor-pointer hover:scale-105">
                    Checkout Now
                </button>
            </div>
        </div>
    );
}
