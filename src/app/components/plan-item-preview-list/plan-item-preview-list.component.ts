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
  totalCount: Number = 0;
  filters: any = {
    cityTo: '',
    cityFrom: '',
    orderType: '',
    offset: 0
  };

  constructor(private orderService: OrderService) {
  }

  applyFilters(event) {
    this.filters.cityTo = event.cityTo || '';
    this.filters.cityFrom = event.cityFrom || '';
    this.filters.offset = 0;
    console.log('Applied filters', this.filters);
    this.refreshOrders();
  }

  ngOnInit() {
    this.refreshOrders();
  }

  fetchResult(result) {
    if (!result) {
      return;
    }
    this.planList = result.map( item => new OrderModel(item));
  }

  refreshOrders() {
    this.orderService.getOrders(this.filters).subscribe(data => {
      this.fetchResult(data.result);
      this.totalCount = data.count;
    });
  }

  pagerAction(event) {
    this.filters.offset = event.pageIndex * event.pageSize;
    this.refreshOrders();
  }

}
