export class UserModel {

    firstName: string;
    lastName: string;
    email: string;
    id: string;

    constructor(obj?) {
        this.id = obj && obj.id || null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
    }

    getFullName(): string {
        return (this.firstName ? this.firstName : '') + ' ' + (this.lastName ? this.lastName : '');
    }

}