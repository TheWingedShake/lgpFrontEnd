import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OrderModel } from '../order/order.model';
import { OrderService } from '../../services/order-service/order.service';
import { CityModel } from '../city/city.model';
import { CityService } from '../../services/city-service/city.service';
import { DISABLED } from '@angular/forms/src/model';

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

  cities: CityModel[] = [];

  minDate = new Date();

  constructor(private fb: FormBuilder, private orderService: OrderService, private cityService: CityService) {}

  ngOnInit() {
    if (this.id) {
      this.orderService.getOrder(this.id).subscribe(data => {
        this.order = new OrderModel(data);
        this.instantiateForm();
      });
    } else {
      this.order = new OrderModel();
      this.instantiateForm();
    }
    this.cityService.getCities().subscribe(
      data => this.cities = data,
      error => console.log(error)
    );
  }

  instantiateForm(): void {
    this.orderName = this.order.name;
    this.myForm = this.fb.group({
      orderName: [this.order.name, Validators.required],
      destinationFrom: [this.order.destinationFrom.getId(), Validators.required],
      destinationTo: [this.order.destinationTo.getId(), Validators.required],
      dateStart: [this.order.dateStart, Validators.required],
      description: [this.order.description],
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
