import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

import CartItem from './CartItem';
import SummarySection from './SummarySection';

export default function ShoppingCart() {
    const [items, setCartItems] = useState(cartItems);

    const subTotalAmount = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    function handleQuantityChange(id, amount) {
        const updatedItems = items.map((item) => {
            if (item.id === id && item.quantity >= 0) {
                item.quantity += amount;
            }
            return item;
        });
        setCartItems(updatedItems);
    }

    function handleItemDeletion(id) {
        const updatedItems = items.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto mt-15">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">
                    Shopping Cart
                </h1>
                <div className="flex gap-8">
                    <div className="w-full border border-gray-300 rounded-xl p-4">
                        <table className="w-full">
                            <thead className="border-b border-gray-100">
                                <tr className="text-sm font-semibold">
                                    <th className="text-left pb-6">Product</th>
                                    <th className="w-40 text-left pb-6">
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
                                {items.length ? (
                                    items.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onQuantityChange={
                                                handleQuantityChange
                                            }
                                            onItemDelete={handleItemDeletion}
                                        />
                                    ))
                                ) : (
                                    <p>Your cart list is empty</p>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <SummarySection className="w-95" subTotalAmount={subTotalAmount} />
                </div>
            </div>
        </main>
    );
}
