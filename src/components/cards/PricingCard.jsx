export default function PricingCard({ features, type, amount, isPopular }) {
    return (
        <div
            className={`relative text-white p-8 flex flex-col rounded-4xl 
            ${
                isPopular
                    ? 'bg-indigo-500 shadow-indigo-500/30 scale-105 shadow-xl'
                    : 'bg-slate-800 shadow-md border border-slate-700'
            }`}
        >
            {isPopular && (
                <span className="absolute top-4 right-6 text-white bg-white/20 text-sm font-bold uppercase px-3 py-2 rounded-full">
                    MOST POPULAR
                </span>
            )}
            <div className="price mb-2">
                <div className="flex items-baseline gap-2 my-2">
                    <h1 className="text-white font-bold text-4xl">{amount}</h1>
                    <span
                        className={`text-md font-medium ${isPopular ? 'text-indigo-200' : 'text-slate-400'}`}
                    >
                        /month
                    </span>
                </div>
                <div className="text-2xl font-semibold">{type}</div>
            </div>
            <p className="text-slate-300 text-sm mb-6">
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
                        <span className="text-md font-medium text-slate-300">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <button
                className={`text-center font-semibold py-4 rounded-full w-full ${isPopular ? 'text-indigo-600 bg-white' : 'text-white bg-slate-600'}`}
            >
                {type === 'base' ? 'Downgrade' : 'Upgrade'}
            </button>
        </div>
    );
}
