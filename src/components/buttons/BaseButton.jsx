export default function BaseButton({ label, isPopular }) {
    return (
        <button
            className={`text-center font-semibold py-4 rounded-full w-full hover:cursor-pointer hover:scale-102
                ${
                    isPopular
                        ? 'text-indigo-600 bg-white hover:bg-slate-50'
                        : 'text-white bg-slate-600 hover:bg-slate-500'
                }`}
        >
            {label}
        </button>
    );
}
