export function isInCurrentMonth(isoDate: string):boolean {
    const date = new Date(isoDate);
    const now = new Date();

    return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
    );
}
export function isTodayInRange(from: string | Date, until: string | Date): boolean {
    const now = new Date();
    const start = new Date(from);
    const end = new Date(until);

    return now >= start && now <= end;
}
export function isDateInRange(date:string , from: string | Date, until: string | Date): boolean {
    const today = new Date(date);
    const start = new Date(from);
    const end = new Date(until);

    return today >= start && today <= end;
}