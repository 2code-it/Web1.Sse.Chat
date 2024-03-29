

const toPaddedString = (x: number) => x.toString().padStart(2, '0');

export function formatDate(date: Date | null) {
    if (date == null) return '';
    const dateParts = [date.getFullYear(), date.getMonth() + 1, date.getDay()];
    const timeParts = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return dateParts.map(toPaddedString).join('-') + ' ' + timeParts.map(toPaddedString).join(':');
}