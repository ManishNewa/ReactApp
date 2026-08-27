import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

import CartSection from './CartSection';
import SummarySection from './SummarySection';

export default function ShoppingCart() {
    const [items, setCartItems] = useState(cartItems);

    const subTotalAmount = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto mt-15">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">
                    Shopping Cart
                </h1>
                <div className="flex gap-8">
                    <CartSection
                        className="w-full border border-gray-300 rounded-xl p-4"
                        items={items}
                        setCartItems={setCartItems}
                    />
                    <SummarySection
                        className="w-95"
                        subTotalAmount={subTotalAmount}
                    />
                </div>
            </div>
        </main>
    );
}
