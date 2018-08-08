import { SpyObject } from './test.helpers';
import { OrderService } from '../services/order-service/order.service';

export class MockOrderService extends SpyObject {

    getOrdersSpy;
    getOrderSpy;
    createOrderSpy;
    updateOrderSpy;
    completeOrderSpy;
    deleteOrderSpy;

    constructor() {
        super(OrderService);
        this.fakeResponse = null;
        this.getOrdersSpy = this.spy('getOrders').and.returnValue(this);
        this.getOrderSpy = this.spy('getOrder').and.returnValue(this);
        this.createOrderSpy = this.spy('createtOrder').and.returnValue(this);
        this.completeOrderSpy = this.spy('completeOrder').and.returnValue(this);
        this.updateOrderSpy = this.spy('updateOrder').and.returnValue(this);
        this.deleteOrderSpy = this.spy('deleteOrder').and.returnValue(this);
    }

    getProviders(): Array<any> {
        return [{ provide: OrderService, useValue: this }];
    }

}
