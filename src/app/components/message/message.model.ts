import { BaseModel } from '../../base.model';
import { UserModel } from '../user/user.model';

export class MessageModel extends BaseModel {

    content: string;
    user: UserModel;
    dateSend: Date;

    constructor(obj?: any) {
        super();
        this.content = obj && obj.content || '';
        this.user = new UserModel(obj && obj.user || null);
        this.dateSend = obj && new Date(obj.created) || null;
    }

}
