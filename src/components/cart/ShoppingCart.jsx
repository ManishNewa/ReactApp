import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

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
                        <div className="flex text-sm font-semibold pb-6">
                            <div className="flex-1">Product</div>
                            <div className="w-30">Quantity</div>
                            <div className="w-20">Total</div>
                            <div className="w-10">Action</div>
                        </div>
                        <div>Here car items will appear</div>
                    </div>
                    <div className="w-95">Right</div>
                </div>
            </div>
        </main>
    );
}
