import CartItem from './CartItem';

export default function CartSection({ items, setCartItems, className }) {
    function handleQuantityChange(id, amount) {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
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
        <div className={className}>
            <table className="w-full">
                <thead className="border-b border-gray-100">
                    <tr className="text-sm font-semibold">
                        <th className="text-left pb-6">Product</th>
                        <th className="w-40 text-left pb-6">Quantity</th>
                        <th className="w-20 text-left pb-6">Total</th>
                        <th className="w-10 text-left pb-6">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.length ? (
                        items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onQuantityChange={handleQuantityChange}
                                onItemDelete={handleItemDeletion}
                            />
                        ))
                    ) : (
                        <p>Your cart list is empty</p>
                    )}
                </tbody>
            </table>
        </div>
    );
}
