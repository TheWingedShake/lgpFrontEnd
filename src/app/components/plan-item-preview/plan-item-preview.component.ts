import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-item-preview',
  templateUrl: './plan-item-preview.component.html',
  styleUrls: ['./plan-item-preview.component.css']
})
export class PlanItemPreviewComponent implements OnInit {

  @Input() destinationFrom: string;
  @Input() destinationTo: string;
  @Input() dateStart: string;
  @Input() name: string;
  @Input() id: string;

  constructor() {
  }

  ngOnInit() {
  }

  openItem() {
    console.log('open item');
    return;
  }

}
