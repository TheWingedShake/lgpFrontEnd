import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service/order.service';
import { PlanItem } from '../plan-item-preview-list/plan.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderModel } from '../order/order.model';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.css']
})
export class OrderEditorComponent implements OnInit {

  id: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  onSubmit(event) {
    const item = new OrderModel({
      name: event.orderName,
      dateStart: event.dateStart,
      destinationFrom: {_id: event.destinationFrom},
      destinationTo: {_id: event.destinationTo},
      description: event.description,
      _id: event.id || null
    });
    if (item._id) {
      this.updatePlan(item);
    } else {
      this.addPlan(item);
    }
  }

  onCancel(): void {
    this.location.back();
  }

  updatePlan(item: OrderModel): void {
    this.orderService.updateOrder(item)
    .subscribe(
      data => {
        this.router.navigate(['/plans/view', item._id]);
      },
      error => console.log(error)
    );
  }

  addPlan(item: OrderModel): void {
    this.orderService.createOrder(item)
    .subscribe(
      data => {
        if (data['error']) {
          console.log(data['error']);
        }else {
          this.router.navigate(['/plans/view', data['_id']]);
        }
      },
      error => console.log(error)
    );
  }

}
