function App() {
    return (
        <main className="min-h-screen bg-[#0F172A] py-[10vh]">
            <section className="hero-section flex flex-col items-center justify-center gap-2">
                <h1 className="text-white text-[32px] font-bold">
                    Simple, transparent pricing
                </h1>
                <p className="text-slate-400 mb-4 font-semibold">
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
                    <div className="card bg-slate-800 text-white ">
                        {/* Popular Tag */}
                        <span>MOST POPULAR</span>
                        <div className="price">
                            <div className="price-name">
                                <h1 className="text-white">$80</h1>/month
                            </div>
                            <div className="price-category">Base</div>
                        </div>
                        <p>
                            For most businesses that want to optimize web
                            queries
                        </p>
                        <ul className="category-features">
                            <li>All limited links</li>
                            <li>Own analytics platform</li>
                            <li>Chat support</li>
                            <li>Optimize hashtags</li>
                            <li>Unlimited users</li>
                        </ul>
                        <button className="text-white text-center bg-[#1E293B] py-3 px-10 rounded-2xl">
                            Downgrade
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
