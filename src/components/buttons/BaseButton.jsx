export default function BaseButton({ label, type }) {
    return (
        <button
            className="w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
            type="{type}"
        >
            {label}
        </button>
    );
}
