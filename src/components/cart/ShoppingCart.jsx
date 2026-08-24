import { useState } from 'react';
import { cartItems } from '../../data/ShoppingCartData';

export default function ShoppingCart() {
    const { items, setCartItems } = useState(cartItems);

    return <>{items}</>;
}
