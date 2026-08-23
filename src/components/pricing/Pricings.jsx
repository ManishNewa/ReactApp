import PricingCard from '../cards/PricingCard';

export default function Pricings() {
    const types = [
        {
            type: 'base',
            amount: '$80',
            isPopular: false,
        },
        {
            type: 'pro',
            amount: '$120',
            isPopular: true,
        },
        {
            type: 'enterprise',
            amount: '$260',
            isPopular: false,
        },
    ];
    const features = [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white text-[32px] font-bold mb-4">
                Simple, transparent pricing
            </h1>
            <p className="text-lg text-slate-400 mb-8 font-semibold">
                No contracts. No suprise fees.
            </p>
            <div className="flex p-2 mb-10 gap-5 bg-[#1E293B] border-2 border-[#263145] rounded-[50px]">
                <button className="uppercase px-5 py-3 bg-indigo-400 rounded-[50px] font-semibold text-white">
                    Monthly
                </button>
                <button className="uppercase px-5 py-3 font-semibold text-slate-400">
                    Yearly
                </button>
            </div>
            <div className="pricing-section w-full max-w-[260]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
                    {types.map((type) => (
                        <PricingCard features={features} {...type} />
                    ))}
                </div>
            </div>
        </div>
    );
}
