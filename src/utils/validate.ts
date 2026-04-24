export function validateFullName(fullName: string): string | null {
    const trimmed = fullName.trim();

    if (trimmed.length < 3) {
        return "* Name is too short";
    }

    const parts = trimmed.split(" ");

    if (parts.length < 2) {
        return "* Please enter both first and last name";
    }

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    if (!nameRegex.test(trimmed)) {
        return "* Name must contain only letters";
    }

    return null;
}

export function validatePassword(password: string): string | null {
    if (password.length < 8) {
        return "* Password must be at least 8 characters long";
    }

    if (!/[A-Za-z]/.test(password)) {
        return "* Password must contain at least one letter";
    }

    if (!/\d/.test(password)) {
        return "* Password must contain at least one number";
    }

    return null;
}