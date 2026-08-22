export default function PricingCard({ features, type, amount, isPopular }) {
    return (
        <div className="bg-slate-800 text-white p-8 border border-slate-500 flex flex-col rounded-4xl">
            {/* Popular Tag */}
            {isPopular && <span>MOST POPULAR</span>}
            <div className="price mb-2">
                <div className="flex items-baseline gap-2 my-2">
                    <h1 className="text-white text-bold text-4xl">{amount}</h1>
                    <span className="text-slate-400">/{type}</span>
                </div>
                <div className="text-2xl font-semibold">Base</div>
            </div>
            <p className="text-slate-400 text-sm mb-6">
                For most businesses that want to optimize web queries
            </p>
            <ul className="flex-1 mb-8 space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                        <div className="bg-white/20 flex justify-center items-center shrink-0 w-5 h-5 rounded-full">
                            <svg
                                className="w-3.5 h-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <span className="text-md font-medium text-slate-400">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <button className="text-white text-center py-4 rounded-full w-full bg-slate-600">
                Downgrade
            </button>
        </div>
    );
}
