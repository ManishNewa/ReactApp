// Pass length: charc, symbol, number
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])$/;

export function checkValidations(form) {
    if (form.password.length < 8) {
        return {
            valid: false,
            message: 'Password must be at least 8 characters.',
        };
    }

    if (passwordPattern.test(form.password)) {
        return {
            valid: false,
            message:
                'Password must contain at least one alphabhet, one numeric value and one symbol.',
        };
    }

    if (form.password !== form.confirmPassword) {
        return {
            valid: false,
            message: 'Passwords do not match.',
        };
    }

    return {
        valid: true,
        message: '',
    };
}
