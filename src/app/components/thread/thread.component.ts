import { Component, OnInit } from '@angular/core';
import { ThreadModel } from '../threads/thread.model';
import { MessageService } from '../../services/message-service/message.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from '../../services/thread-service/thread.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageModel } from '../message/message.model';
import { UserModel } from '../user/user.model';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  id: string;
  thread: ThreadModel;
  messageForm: FormGroup;
  person: UserModel;

  constructor(
    private messageService: MessageService,
    private threadService: ThreadService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
   }

  ngOnInit() {
    this.threadService.getThread(this.id).subscribe(
      data => {
        this.thread = new ThreadModel(data['thread']);
        this.thread.setMessages(data['messages']);
        this.person = this.getPerson();
      },
      error => {
        console.log(error);
      }
    );
    this.messageForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  sendMessage(value): void {
    if (!value || !value.content.length) {
      return;
    }
    this.messageService.sendMessageByThread(this.id, value.content).subscribe(
      data => {
        this.thread.messages.push(new MessageModel(data));
        this.messageForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }

  getPerson(): UserModel {
    for (const user of this.thread.users) {
      if (user.id !== this.authService.getUser().id) {
        return user;
      }
    }
  }

  back(): void {
    this.location.back();
  }

}
