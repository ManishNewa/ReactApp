function App() {
    return (
        <main className="min-h-screen bg-[#0F172A] flex flex-col py-20 px-5 mx-auto">
            <section className="hero-section flex flex-col items-center justify-center gap-2 mb-20">
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
            
        </main>
    );
}

export default App;
