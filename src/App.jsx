function App() {
    return (
        <main className="min-h-screen bg-[#0F172A] py-[10vh]">
            <section className="hero-section flex flex-col items-center justify-center gap-2">
                <h1 className="text-white text-[32px] font-bold">
                    Simple, transparent pricing
                </h1>
                <p className="text-white mb-4">No contracts. No suprise fees.</p>
                <div className="flex  p-2 gap-3 bg-[#1E293B] border-2 border-[#263145] rounded-[50px]">
                    <button className="uppercase p-2 bg-[#6366F1] rounded-[50px] font-semibold text-white">
                        Monthly
                    </button>
                    <button className="uppercase p-2.5 font-semibold text-white">
                        Yearly
                    </button>
                </div>
            </section>
        </main>
    );
}

export default App;
