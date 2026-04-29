export function isInCurrentMonth(isoDate: string):boolean {
    const date = new Date(isoDate);
    const now = new Date();

    return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
    );
}