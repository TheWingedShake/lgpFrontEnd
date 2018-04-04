import { UserModel } from '../user/user.model';

export class MessageModel {

    content: string;
    user: UserModel;

    constructor(obj?: any) {
        this.content = obj && obj.content || '';
        this.user = new UserModel(obj && obj.user || null);
    }

}
