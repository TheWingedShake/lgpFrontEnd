import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OrderModel } from '../order/order.model';
import { OrderService } from '../../services/order-service/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Output() plancreated: EventEmitter<any> = new EventEmitter<any>();
  @Output() plancancelled: EventEmitter<any> = new EventEmitter<any>();
  @Input() id: string;

  myForm: FormGroup;

  orderName: string;

  order: OrderModel;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.order = new OrderModel();
    if (this.id) {
      this.orderService.getOrder(this.id).subscribe(data => {
        if (data._id) {
          this.order.setAttributes(data);
        }
        this.instantiateForm();
      });
    } else {
      this.instantiateForm();
    }
  }

  instantiateForm(): void {
    this.orderName = this.order.name;
    this.myForm = this.fb.group({
      orderName: [this.order.name, Validators.required],
      destinationFrom: [this.order.destinationFrom, Validators.required],
      destinationTo: [this.order.destinationTo, Validators.required],
      dateStart: [this.order.dateStart, Validators.required],
      id: [this.order._id]
    });
  }

  create(value: any): void {
    this.plancreated.emit(value);
    return;
  }

  cancel(): void {
    this.plancancelled.emit();
    return;
  }

}
