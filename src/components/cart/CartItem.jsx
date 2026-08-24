export default function CartItem({ title, subtitle, price, quantity, image }) {
    return (
        <div className="flex">
            <div className="flex flex-1 items-center gap-2">
                <img
                    className="w-20 u2- rounded-xl object-cover"
                    src={image}
                ></img>
                <div>
                    <h3 className="font-semibold text-gray-900 truncate">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">{subtitle}</p>
                </div>
            </div>
            <div className="w-30">{quantity}</div>
            <div className="w-20">{price * quantity}</div>
            <div className="w-10">Action</div>
        </div>
    );
}
