import { useState } from 'react';

import InputText from './input/InputText';

// Pass length: min 8, charc, symbol, number
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

function Signup() {
    const [form, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [validationSuccess, setValidationState] = useState(false);

    function updateForm(formKey, value) {
        const updatedFormData = {
            ...form,
            [formKey]: value,
        };
        setFormData(updatedFormData);
    }

    function checkValidations() {
        // Check password
        if (!passwordPattern.test(form.password)) {
            return false;
        }

        // Check passwords match
        if (form.password !== form.confirmPassword) {
            return false;
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        const valid = checkValidations();

        setValidationState(valid);
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6 py-12 text-stone-900">
            <section className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
                <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Get started
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Create account
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                        Fill in your details to create an account.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleFormSubmit}>
                    <InputText
                        name="name"
                        label="Name"
                        placeholder="Alex Morgan"
                        required={true}
                        type="text"
                        value={form.name}
                        updateForm={updateForm}
                    />

                    <InputText
                        name="email"
                        label="Email"
                        placeholder="you@example.com"
                        required={true}
                        type="email"
                        value={form.email}
                        updateForm={updateForm}
                    />

                    <InputText
                        name="password"
                        label="Password"
                        placeholder="Create a password"
                        required={true}
                        type="password"
                        value={form.password}
                        updateForm={updateForm}
                    />

                    <InputText
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Repeat your password"
                        required={true}
                        type="password"
                        value={form.confirmPassword}
                        updateForm={updateForm}
                    />
                    <button
                        className="w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                        type="submit"
                    >
                        Create account
                    </button>
                </form>

                {submitted && (
                    <p className="mt-5 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-800">
                        {validationSuccess
                            ? `Account created for ${form.name}.`
                            : 'Validation Failed'}
                    </p>
                )}
            </section>
        </main>
    );
}

export default Signup;
