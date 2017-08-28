import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
//Interfaces
import { ILocation, IQueryLocation } from '../shared/common-data';

@Injectable()
export class LocationService {
    private _locationUrl = "api/locations/locations.json";
    locations: ILocation[];
    constructor(private _http: Http){

    }

    getAll(queryOptions: IQueryLocation): Observable<ILocation[]> {
        return this._http.get(this._locationUrl)
        .map((response: Response) => {
            this.locations = response.json()
            if (queryOptions.location && queryOptions.location !== 'Any'){
                this.locations = this.locations.filter(location => location.location === queryOptions.location);
            }
            if (queryOptions.eventType && queryOptions.eventType !== 'Any'){
                this.locations = this.locations.filter(location => location.eventType === queryOptions.eventType);
            }
            if (queryOptions.guests > 0 && queryOptions.guests < 400){
                this.locations = this.locations.filter(location => 
                    location.guests >= queryOptions.guests && 
                    Number(location.guests) < Number(queryOptions.guests) + 100);
            }
            if (queryOptions.guests > 0 && queryOptions.guests >= 400){
                this.locations = this.locations.filter(location => 
                    location.guests >= queryOptions.guests);
            }
            if (queryOptions.minPrice != undefined && queryOptions.maxPrice != undefined){
                this.locations = this.locations.filter(location => 
                    location.price >= queryOptions.minPrice && 
                    location.price < queryOptions.maxPrice);
            }
            return this.locations;
        })
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}