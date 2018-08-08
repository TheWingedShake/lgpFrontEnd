export class BaseModel {

    getDateFormatted(dateEntered: Date): string {
        if (!dateEntered) {
            return '';
        }
        return `${this.pad(dateEntered.getDate())}:${this.pad(dateEntered.getMonth() + 1)}:${dateEntered.getFullYear()}`;
    }

    pad(number): string {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

}