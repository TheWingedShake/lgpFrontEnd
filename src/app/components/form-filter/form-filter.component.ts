import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../../services/city-service/city.service';
import { CityModel } from '../city/city.model';
import { CityStoreService } from '../../services/city-service/city-store.service';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  @Output() applyfilter: EventEmitter<any> = new EventEmitter<any>();

  cities: CityModel[] = [];

  myForm: FormGroup;
  constructor(private cityService: CityService, private cityStore: CityStoreService) { }

  ngOnInit() {
    const fb = new FormBuilder();
    this.myForm = fb.group({
      orderType: [''],
      cityFrom: [''],
      cityTo: ['']
    });
    this.cityStore.getCities().subscribe(
      data => this.cities = data
    );
  }

  applyFilter(value) {
    console.log('apply filters', value);
    this.applyfilter.emit(value);
    return;
  }

}
