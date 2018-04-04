export class UserModel {

    firstName: string;
    lastName: string;
    email: string;
    dateEntered: Date;
    descrtiption: string;
    id: string;

    constructor(obj?) {
        this.id = obj && (obj.id || obj._id) || null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
        this.dateEntered = obj && new Date(obj.dateEntered) || null;
    }

    getFullName(): string {
        return (this.firstName ? this.firstName : '') + ' ' + (this.lastName ? this.lastName : '');
    }

    getDateEntered(): string {
        if (!this.dateEntered) {
            return '';
        }
        // tslint:disable-next-line:max-line-length
        return `${this.pad(this.dateEntered.getDate())}:${this.pad(this.dateEntered.getMonth() + 1)}:${this.dateEntered.getFullYear()}`;
    }

    private pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

}
