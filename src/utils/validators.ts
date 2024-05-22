export function isValidEmail(email: string): boolean {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

export function isNumericString(value: string): boolean {
    return /^[0-9]+$/.test(value);
}
export function isStrictlyPositiveInteger(value: number): boolean {
    return Number.isInteger(value) && value > 0;
}
