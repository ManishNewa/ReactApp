import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

import CartItem from './CartItem';
import SummaryItem from './SummaryItem';

export default function ShoppingCart() {
    const [items, setCartItems] = useState(cartItems);

    const subTotalAmount = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const discountAmount = subTotalAmount * 0.1;

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
                                {items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onQuantityChange={handleQuantityChange}
                                        onItemDelete={handleItemDeletion}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-95">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                Order Summary
                            </h2>
                            {/* <div>
                                <input type="text"></input>
                            </div> */}
                            <div className="flex flex-col gap-3">
                                <SummaryItem
                                    label="sub amount"
                                    amount={subTotalAmount.toFixed(2)}
                                />
                                <SummaryItem
                                    label="discount (10%)"
                                    amount={discountAmount.toFixed(2)}
                                />
                                <SummaryItem label="delivery fee" />
                                <SummaryItem className="mt-2" label="total" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
