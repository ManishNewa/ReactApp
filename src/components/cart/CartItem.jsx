export default function CartItem({ title, subtitle, price, quantity, image }) {
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
                    <button className="w-8 h-8 border flex items-center justify-center">
                        -
                    </button>

                    <span className="w-8 text-center">{quantity}</span>

                    <button className="w-8 h-8 border flex items-center justify-center">
                        +
                    </button>
                </div>
            </td>

            <td>{price * quantity}</td>

            <td>Action</td>
        </tr>
    );
}
