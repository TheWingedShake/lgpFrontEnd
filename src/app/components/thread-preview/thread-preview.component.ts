import { Component, OnInit, Input } from '@angular/core';
import { ThreadModel } from '../threads/thread.model';

@Component({
  selector: 'app-thread-preview',
  templateUrl: './thread-preview.component.html',
  styleUrls: ['./thread-preview.component.css']
})
export class ThreadPreviewComponent implements OnInit {

  @Input() thread: ThreadModel;

  recentMessages = 0;

  constructor() { }

  ngOnInit() {
  }

}
