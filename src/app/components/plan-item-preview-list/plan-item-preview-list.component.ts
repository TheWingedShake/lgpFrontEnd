import { Component, OnInit } from '@angular/core';

import { PlanItemPreview } from '../../planItemPreview';
import { OrderService } from '../../services/order-service/order.service';
import { PlanItem } from './plan.model';
import { OrderModel } from '../order/order.model';

@Component({
  selector: 'app-plan-item-preview-list',
  templateUrl: './plan-item-preview-list.component.html',
  styleUrls: ['./plan-item-preview-list.component.css']
})
export class PlanItemPreviewListComponent implements OnInit {

  planList: OrderModel[];

  constructor(private orderService: OrderService) {
  }

  applyFilters(event) {
    const params = {city: ''};
    if (event.city) {
      params.city = event.city;
    }
    console.log('Applied filters', params);
    this.orderService.getOrders(params).subscribe(data => this.planList = data);
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      console.log(data);
      this.planList = data;
    });
  }

}
