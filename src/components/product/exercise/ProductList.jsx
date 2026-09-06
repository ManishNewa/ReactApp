import { useContext } from 'react';
import { ProductCard } from './ProductCard';
import { productsSearch } from '../../../data';
import { CartContext } from './CartProvider';

export function ProductList() {
    const { cart, setCart } = useContext(CartContext);
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-700">
                    Product list
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
                    Choose something useful
                </h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productsSearch.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </div>
        </section>
    );
}
