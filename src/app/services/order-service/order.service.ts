import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { PlanItem } from '../../components/plan-item-preview-list/plan.model';
import { OrderModel } from '../../components/order/order.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class OrderService {

  private ordersUrl = '/orders';

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) {

  }

  getOrders(obj?: any): Observable<any> {
    const paramsString = [];
    if (obj && obj.cityTo) {
      paramsString.push(`cityTo=${obj.cityTo}`);
    }
    if (obj && obj.cityFrom) {
      paramsString.push(`cityFrom=${obj.cityFrom}`);
    }
    if (obj && obj.offset) {
      paramsString.push(`offset=${obj.offset}`);
    }
    const params = new HttpParams({
      fromString: paramsString.join('&')
    });
    return this.http.get<any>(`${this.apiUrl}${this.ordersUrl}`, {params: params, withCredentials: true});
  }

  getOrder(id: string): Observable<OrderModel> {
    return this.http.get<OrderModel>(`${this.apiUrl}${this.ordersUrl}/${id}`, {withCredentials: true})
    .pipe();
  }

  createOrder( item: OrderModel ) {
    const body = {
      name: item.name,
      dateStart: item.dateStart,
      destinationFrom: item.destinationFrom.getId(),
      destinationTo: item.destinationTo.getId(),
      description: item.description
    };
    return this.http.post(`${this.apiUrl}${this.ordersUrl}`, body, {withCredentials: true});
  }

  updateOrder( item: OrderModel ) {
    const body = {
      name: item.name,
      dateStart: item.dateStart,
      destinationFrom: item.destinationFrom.getId(),
      destinationTo: item.destinationTo.getId(),
      description: item.description
    };
    return this.http.put(`${this.apiUrl}${this.ordersUrl}/${item._id}`, body, {withCredentials: true});
  }

  completeOrder(id) {
    const body = {
      isCompleted: true
    };
    return this.http.put(`${this.apiUrl}${this.ordersUrl}/${id}`, body, {withCredentials: true});
  }

  deleteOrder (id: string) {
    return this.http.delete(`${this.apiUrl}${this.ordersUrl}/${id}`, {withCredentials: true});
  }

}
