import { Link } from 'react-router-dom';

export function Home() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Router practice
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
                Welcome to the route playground
            </h1>
            <p className="mb-8 max-w-xl text-lg text-slate-600">
                Use the links above to practice client-side navigation without
                reloading the page.
            </p>
            <div className="flex flex-wrap gap-3">
                <Link
                    className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
                    to="/about"
                >
                    Open the about page
                </Link>
                <Link
                    className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
                    to="/contact"
                >
                    Open the contact page
                </Link>
            </div>
        </section>
    );
}
