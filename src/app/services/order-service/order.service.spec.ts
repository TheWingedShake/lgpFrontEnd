import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { MockBackend } from '@angular/http/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';


import { OrderService } from './order.service';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        OrderService,
        { provide: Http,
          useFactory: (
            backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {provide: 'API_URL', useValue: 'http://localhost:8000'}
      ]
    });
  });

  function expectURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      const response = new ResponseOptions({body: '{"name":"Test order"}'});
      c.mockRespond(new Response(response));
    });
  }

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  describe('getOrder', () => {
    it('Retrieving order item', inject([OrderService, MockBackend], fakeAsync((orderService: OrderService, mockBackend: MockBackend) => {
      let res;
      expectURL(mockBackend, 'http://localhost:8000/orders/orderId');
      orderService.getOrder('orderId').subscribe( _res => {
        res = _res;
      });
      tick();
      expect(res.name).toBe('Test order');
    })));
  });

  describe('getOrders', () => {
    it('Retrieving a list of orders',
    inject([OrderService, MockBackend], fakeAsync((orderService: OrderService, mockBackend: MockBackend) => {
      let res;
      expectURL(mockBackend, 'http://localhost:8000/orders');
      orderService.getOrders().subscribe( _res => {
        res = _res;
      });
      tick();
      expect(res.name).toBe('Test order');
    })));
  });

});
