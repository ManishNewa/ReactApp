import { useState } from 'react';

import InputText from './inputs/InputText';
import BaseButton from './buttons/BaseButton';
import { checkValidations } from '../../FormValidations';
import MessageBox from './common/MessageBox';

function Signup() {
    const [form, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [validation, setValidationState] = useState({
        valid: false,
        message: '',
    });

    function updateForm(formKey, value) {
        const updatedFormData = {
            ...form,
            [formKey]: value,
        };
        setFormData(updatedFormData);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        const response = checkValidations(form);

        setValidationState(response);
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
                    <BaseButton label="Create account" type="submit" />
                </form>

                {submitted && (
                    <MessageBox>
                        {validation.valid
                            ? `Account created for ${form.name}.`
                            : validation.message}
                    </MessageBox>
                )}
            </section>
        </main>
    );
}

export default Signup;
