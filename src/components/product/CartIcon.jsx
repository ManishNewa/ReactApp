export function CartIcon({ cart }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-stone-700">
      <span aria-hidden="true" className="text-lg">Cart</span>
      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-600 px-2 text-xs font-bold text-white">
        {cart.length}
      </span>
    </div>
  );
}
