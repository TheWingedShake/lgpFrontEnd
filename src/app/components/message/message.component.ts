import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from './message.model';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
