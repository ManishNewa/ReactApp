function App() {
    const features1 = [
        {
            key: 1,
            value: 'All limited links',
        },
        {
            key: 2,
            value: 'Own analytics platform',
        },
        {
            key: 3,
            value: 'Chat support',
        },
        {
            key: 4,
            value: 'Optimize hashtags',
        },
        {
            key: 5,
            value: 'Unlimited users',
        },
    ];
    return (
        <main className="min-h-screen bg-[#0F172A] flex flex-col py-20 px-5 mx-auto">
            <section className="hero-section flex flex-col items-center justify-center gap-2">
                <h1 className="text-white text-[32px] font-bold mb-4">
                    Simple, transparent pricing
                </h1>
                <p className="text-lg text-slate-400 mb-4 font-semibold">
                    No contracts. No suprise fees.
                </p>
                <div className="flex p-2 gap-5 bg-[#1E293B] border-2 border-[#263145] rounded-[50px]">
                    <button className="uppercase px-5 py-2 bg-[#6366F1] rounded-[50px] font-semibold text-white">
                        Monthly
                    </button>
                    <button className="uppercase px-5 py-2 font-semibold text-slate-400">
                        Yearly
                    </button>
                </div>
            </section>
            <section className="pricing-section w-full max-w-[260]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                    <div className="bg-slate-800 text-white p-8 border border-slate-500 flex flex-col rounded-4xl">
                        {/* Popular Tag */}
                        {/* <span>MOST POPULAR</span> */}
                        <div className="price mb-2">
                            <div className="flex items-baseline gap-2 my-2">
                                <h1 className="text-white text-bold text-4xl">
                                    $80
                                </h1>
                                <span className="text-slate-400">/month</span>
                            </div>
                            <div className="text-2xl font-semibold">Base</div>
                        </div>
                        <p className="text-slate-400 text-sm mb-6">
                            For most businesses that want to optimize web
                            queries
                        </p>
                        <ul className="flex-1 mb-8">
                            {features1.map((feature) => (
                                <li
                                    key={feature.id}
                                    className="flex items-center gap-2"
                                >
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
                                    {feature.value}
                                </li>
                            ))}
                        </ul>
                        <button className="text-white text-center py-4 rounded-full w-full bg-slate-600">
                            Downgrade
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
