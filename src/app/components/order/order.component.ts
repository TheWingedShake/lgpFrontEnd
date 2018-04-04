import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service/order.service';
import { OrderModel } from './order.model';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../services/message-service/message.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id: string;
  order: OrderModel;
  messageFormOpened = false;
  messageForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.orderService.getOrder(this.id)
    .subscribe(data => {
      this.order = new OrderModel(data);
    });
    this.messageForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  back(): void {
    this.location.back();
  }

  isEditable(): boolean {
    return this.authService.getUser() && this.authService.getUser().id === this.order.user.id;
  }

  edit(): void {
    this.router.navigate(['/plans/edit', this.id]);
  }

  sendMessage(value): void {
    this.messageService.sendMessageByOrder(this.id, value.content).subscribe(
      data => {
        this.messageForm.reset();
        this.messageFormOpened = false;
      },
      error => console.log(error)
    );
  }

  delete(): void {
    this.orderService.deleteOrder(this.id)
    .subscribe(() => {
      this.router.navigate(['/plans']);
    });
  }

  complete(): void {
    this.orderService.completeOrder(this.id)
    .subscribe(
      data => {
        if ( data['error'] ) {
          console.log(data['error']);
        } else {
          this.order.isCompleted = true;
        }
      },
      error => console.log(error)
    );
  }

  toggleMessageForm(show: boolean): void {
    if (typeof show !== 'undefined') {
      this.messageFormOpened = show;
    } else {
      this.messageFormOpened = !this.messageFormOpened;
    }
  }

}
