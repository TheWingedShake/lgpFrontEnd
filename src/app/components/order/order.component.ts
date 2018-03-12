import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service/order.service';
import { OrderModel } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id: string;
  order: OrderModel;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router, private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.orderService.getOrder(this.id)
    .subscribe(data => {
      this.order = new OrderModel(data);
    });
  }

  back(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/plans/edit', this.id]);
  }

  delete(): void {
    this.orderService.deleteOrder(this.id)
    .subscribe(() => {
      this.router.navigate(['/plans']);
    });
  }

}
