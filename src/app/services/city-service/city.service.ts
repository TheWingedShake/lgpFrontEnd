import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CityModel } from '../../components/city/city.model';

@Injectable()
export class CityService {

  private citiesUrl = '/cities';
  private cities: CityModel[];

  constructor( private http: HttpClient, @Inject('API_URL') private apiUrl: string ) { }

  getCities(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(this.apiUrl + this.citiesUrl)
    .pipe();
  }

}
