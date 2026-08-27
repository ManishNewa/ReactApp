import { ShieldIcon } from '../icons/Icons';
import SummaryItem from './SummaryItem';

const discountPercent = 10;
const deliveryFee = 100;

export default function Summary({ subTotalAmount, className }) {
    const discountAmount = (discountPercent / 100) * subTotalAmount;
    const totalAmount = subTotalAmount - discountAmount + deliveryFee;

    return (
        <div className={className}>
            <div className="border border-gray-300 rounded-3xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Order Summary
                </h2>
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
                <div className="flex flex-col gap-3 my-6">
                    <SummaryItem label="sub amount" amount={subTotalAmount} />
                    <SummaryItem
                        label="discount (10%)"
                        amount={discountAmount}
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
