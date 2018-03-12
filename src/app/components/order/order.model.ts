export class OrderModel {

    _id: string;
    name: string;
    destinationFrom: string;
    destinationTo: string;
    dateStart: string;
    description: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.destinationFrom = obj && obj.destinationFrom || null;
        this.destinationTo = obj && obj.destinationTo || null;
        this.dateStart = obj && obj.dateStart || null;
    }

    setAttributes(obj: any): void {
        for (let i in obj) {
            this[i] = obj[i];
        }
    }

}