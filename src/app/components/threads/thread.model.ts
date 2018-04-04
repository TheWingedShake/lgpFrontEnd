import { OrderModel } from '../order/order.model';
import { MessageModel } from '../message/message.model';
import { UserModel } from '../user/user.model';
export class ThreadModel {

    order: OrderModel;
    id: string;
    messages: MessageModel[];
    users: UserModel[] = [];

    constructor(obj?: any) {
        this.order = new OrderModel(obj && obj.order);
        this.id = obj && obj._id || null;
        this.messages = [];
        if(obj && obj.users){
            obj.users.map(item => {
                this.users.push(new UserModel(item));
            });
        }
    }

    setMessages(messages): void {
        messages.map(item => {
            this.messages.push(new MessageModel(item));
        });
    }

}

