export class CityModel {

    _id: string;
    name: string;
    postcode: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.postcode = obj && obj.postcode || null;
    }

    getName(): string {
        return this.name;
    }

    getId(): string {
        return this._id;
    }

}
