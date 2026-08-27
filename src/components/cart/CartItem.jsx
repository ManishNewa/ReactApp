import { MinusIcon, PlusIcon, TrashIcon } from '../icons/Icons';

export default function CartItem({ item, onQuantityChange, onItemDelete }) {
    const { id, title, image, subtitle, price, quantity } = item;

    function handleQuantityChange(id, quantity) {
        if (item.quantity === 1 && quantity == -1) {
            onItemDelete(id);
        } else {
            onQuantityChange(id, quantity);
        }
    }

    return (
        <tr>
            <td className="py-3">
                <div className="flex items-center gap-2">
                    <img
                        className="w-20 h-20 rounded-xl object-cover"
                        src={image}
                        alt={title}
                    />

                    <div>
                        <h3 className="font-semibold text-gray-900 truncate">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-500 truncate">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </td>

            <td>
                <div className="inline-flex items-center justify-center gap-5 rounded-full border border-gray-200 px-3 py-1">
                    <button
                        onClick={() => handleQuantityChange(id, -1)}
                        className="hover:cursor-pointer hover:scale-105"
                    >
                        <MinusIcon />
                    </button>

                    <span className="w-8 text-center">{quantity}</span>

                    <button
                        onClick={() => onQuantityChange(id, 1)}
                        className="hover:cursor-pointer hover:scale-105"
                    >
                        <PlusIcon />
                    </button>
                </div>
            </td>

            <td>{(price * quantity)?.toFixed(2)}</td>

            <td>
                <button
                    onClick={() => {
                        if (
                            window.confirm(
                                'Are you sure you want to remove this item?',
                            )
                        ) {
                            onItemDelete(id);
                        }
                    }}
                >
                    <TrashIcon />
                </button>
            </td>
        </tr>
    );
}
