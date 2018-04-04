import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { MessageService } from '../../services/message-service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  recentMessagesCount = 0;

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.runMessageChecker();
    }
  }

  runMessageChecker(): void {
    this.messageService.getUnreadMessageCount().subscribe(
      data => {
        if (!data.error) {
          this.recentMessagesCount = data.count;
        } else {
          console.log(data.error);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
