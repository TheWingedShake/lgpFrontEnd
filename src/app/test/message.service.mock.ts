import { SpyObject } from './test.helpers';
import { MessageService } from '../services/message-service/message.service';

export class MockMessageService extends SpyObject {

    sendMessageByOrderSpy;
    sendMessageByThreadSpy;
    sendMessageSpy;
    getUnreadMessageCountSpy;

    constructor() {
        super(MessageService);
        this.fakeResponse = null;
        this.sendMessageByOrderSpy = this.spy('sendMessageByOrder').and.returnValue(this);
        this.sendMessageByThreadSpy = this.spy('sendMessageByThread').and.returnValue(this);
        this.sendMessageSpy = this.spy('sendMessage').and.returnValue(this);
        this.getUnreadMessageCountSpy = this.spy('getUnreadMessageCount').and.returnValue(this);
    }

    getProviders(): Array<any> {
        return [{ provide: MessageService, useValue: this }];
    }

}
