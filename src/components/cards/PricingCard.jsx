import BaseButton from '../buttons/BaseButton';
import CheckIcon from '../icons/CheckIcon';

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
                        <CheckIcon />
                        <span className="text-md font-medium text-slate-300">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <BaseButton
                isPopular={isPopular}
                label={type === 'base' ? 'Downgrade' : 'Upgrade'}
            />
        </div>
    );
}
