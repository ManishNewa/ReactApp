import { useContext } from 'react';
import { CartIcon } from '../CartIcon';
import { CartProvider } from './CartProvider';

export function Navbar() {
    const { cart } = useContext(CartProvider);

    return (
        <header className="border-b border-stone-200 bg-white">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <p className="font-semibold text-stone-900">Simple Store</p>
                <CartIcon cart={cart} />
            </nav>
        </header>
    );
}
