import { CityModel } from '../city/city.model';

export class OrderModel {

    _id: string;
    name: string;
    destinationFrom: CityModel;
    destinationTo: CityModel;
    dateStart: string;
    description: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.destinationFrom = new CityModel(obj && obj.destinationFrom || null);
        this.destinationTo = new CityModel(obj && obj.destinationTo || null);
        this.dateStart = obj && obj.dateStart || null;
        this.description = obj && obj.description || null;
    }

}
