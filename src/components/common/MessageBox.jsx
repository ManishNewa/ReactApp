export default function MessageBox({ message, children }) {
    return (
        <p className="mt-5 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-800">
            {message ?? children}
        </p>
    );
}
