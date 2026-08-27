import Trashbin from '../icons/Trashbin';

export default function CartItem({ item, onQuantityChange, onItemDelete }) {
    const { id, title, image, subtitle, price, quantity } = item;
    const hasMinQuantity = item.quantity <= 1;

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
                <div className="flex items-center gap-2">
                    <button
                        disabled={hasMinQuantity}
                        onClick={() => onQuantityChange(id, -1)}
                        className={`${
                            hasMinQuantity
                                ? 'disabled:opacity-50'
                                : 'hover:cursor-pointer hover:scale-105'
                        }`}
                    >
                        -
                    </button>

                    <span className="w-8 text-center">{quantity}</span>

                    <button
                        onClick={() => onQuantityChange(id, 1)}
                        className="hover:cursor-pointer hover:scale-105"
                    >
                        +
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
                    <Trashbin className="w-5 h-5 text-red-500 hover:scale-110 hover:cursor-pointer" />
                </button>
            </td>
        </tr>
    );
}
