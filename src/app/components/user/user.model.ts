import { BaseModel } from '../../base.model';

export class UserModel extends BaseModel{

    firstName: string;
    lastName: string;
    email: string;
    dateEntered: Date;
    descrtiption: string;
    id: string;

    constructor(obj?) {
        super();
        this.id = obj && (obj.id || obj._id) || null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
        this.dateEntered = obj && new Date(obj.dateEntered) || null;
    }

    getFullName(): string {
        return (this.firstName ? this.firstName : '') + ' ' + (this.lastName ? this.lastName : '');
    }

}
