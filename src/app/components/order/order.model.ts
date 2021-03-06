import { BaseModel } from '../../base.model';
import { CityModel } from '../city/city.model';
import { UserModel } from '../user/user.model';

export class OrderModel extends BaseModel {

    _id: string;
    name: string;
    destinationFrom: CityModel;
    destinationTo: CityModel;
    dateStart: Date;
    description: string;
    user: UserModel;
    isCompleted: boolean;

    constructor(obj?: any) {
        super();
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.destinationFrom = new CityModel(obj && obj.destinationFrom || null);
        this.destinationTo = new CityModel(obj && obj.destinationTo || null);
        this.dateStart = obj && new Date(obj.dateStart) || null;
        this.description = obj && obj.description || null;
        this.user = new UserModel(obj && obj.user || null);
        this.isCompleted = obj && obj.isCompleted;
    }

    getName(): string {
        return this.name || '';
    }

}
