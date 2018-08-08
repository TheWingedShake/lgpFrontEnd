import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { MockBackend } from '@angular/http/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';


import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        CityService,
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

  it('should be created', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCities', () => {
    it('List of cities', inject([CityService, MockBackend], fakeAsync((cityService, mockBackend) => {
      let res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('http://localhost:8000/cities');
        const response = new ResponseOptions({body: '[{"_id":"5a9dd4540bf4f316a4243729","name":"Cherkassy","postcode":"231231"}]'});
        c.mockRespond(new Response(response));
      });
      cityService.getCities().subscribe(_res => {
        res = _res;
      });
      tick();
      expect(res[0].name).toBe('Cherkassy');
    })));
  });

});
