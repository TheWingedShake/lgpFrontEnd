import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../services/thread-service/thread.service';
import { ThreadModel } from './thread.model';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  private threads: ThreadModel[];

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threadService.getThreads().subscribe(
      data => this.threads = data,
      error => console.log(error)
    );
  }

}
