import { Injectable } from '@angular/core';
import { CityService } from './city.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CityModel } from '../../components/city/city.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityStoreService {

    private readonly _cities = new BehaviorSubject<CityModel[]>([]);

    readonly cities$ = this._cities.asObservable();

    constructor(private cityService: CityService) {
        this.fetchAll();
    }

    getCities(): Observable<CityModel[]> {
        return this._cities;
    }

    set cities(val: CityModel[]) {
        this._cities.next(val);
    }

    async fetchAll() {
        this.cities = await this.cityService.getCities().toPromise();
    }

}
