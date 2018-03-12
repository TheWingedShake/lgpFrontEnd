export class PlanItem {
    id: string;
    name: string;
    destinationFrom: string;
    destinationTo: string;
    dateStart: string;

    constructor(obj?: any) {
        this.id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.destinationFrom = obj && obj.destinationFrom || null;
        this.destinationTo = obj && obj.destinationTo || null;
        this.dateStart = obj && obj.dateStart || null;
    }
}
