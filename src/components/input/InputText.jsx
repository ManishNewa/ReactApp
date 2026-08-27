export default function InputText({
    name,
    label,
    placeholder,
    type,
    required,
    value,
    updateForm,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="name">
                {label}
            </label>
            <input
                className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
                onChange={(e) => {
                    updateForm(name, e.target.value);
                }}
            />
        </div>
    );
}
