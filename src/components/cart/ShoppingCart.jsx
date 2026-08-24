import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

import CartItem from './CartItem';

export default function ShoppingCart() {
    const [items, setCartItems] = useState(cartItems);

    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">
                    Shopping Cart
                </h1>
                <div className="flex gap-8">
                    <div className="w-full border border-gray-300 rounded-xl p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="text-sm font-semibold">
                                    <th className="text-left pb-6">Product</th>
                                    <th className="w-30 text-left pb-6">
                                        Quantity
                                    </th>
                                    <th className="w-20 text-left pb-6">
                                        Total
                                    </th>
                                    <th className="w-10 text-left pb-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item) => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-95">Right</div>
                </div>
            </div>
        </main>
    );
}
