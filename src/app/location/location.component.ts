import { Component, OnInit } from "@angular/core";
import {Observable, AsyncSubject} from "rxjs";

import { LocationService } from './location.service';
import { ILocation, IQueryLocation} from '../shared/common-data';

@Component({
    selector: 'eh-lc',
    templateUrl: "app/location/location.component.html"
})

export class LocationComponent implements OnInit {
    queryOptions: IQueryLocation = {
        id: null,
        text: '',
        type: '',
        location:'Any',
        eventType: 'Any',
        minPrice: null,
        maxPrice: null,
        guests: 0
    };
    locations: ILocation[];
    errorMessage: string;
    cities: string[] = ["Any", "Berlin", "Bremen", "Cologne", "Frankfurt", "Hamburg", "Kassel", "Leipzig", "Munich"];
    filterGuestsText: string = 'Any';
    currentLocationDescription: string = '';
    currentLocationPrice: number;

    constructor(private _locationService: LocationService){}

    ngOnInit(): void {
        if (this.queryOptions.guests > 0 && this.queryOptions.guests <= 400){
            this.filterGuestsText = ' - 99';
        }
        this._locationService.getAll(this.queryOptions)
        .subscribe(locations => this.locations = locations,
        error => this.errorMessage = <any>error );
    }

    seach() {
        if (this.queryOptions.minPrice && this.queryOptions.maxPrice){
            let range = this.swipeRange(this.queryOptions.minPrice, this.queryOptions.maxPrice);
            this.queryOptions.minPrice = range.minPrice;
            this.queryOptions.maxPrice = range.maxPrice;
        }
        console.log(this.queryOptions);
        this._locationService.getAll(this.queryOptions)
        .subscribe(locations => this.locations = locations,
        error => this.errorMessage = <any>error );
    }

    swipeRange(min: number, max: number){
        let range: any = {
            minPrice: null,
            maxPrice: null
        }
        if (min > max){
            range.maxPrice = min;
            range.minPrice = max;
        } else {
            range.maxPrice = max;
            range.minPrice = min;
        }
        return range;
    }

    showInfo(location: ILocation){
        this.currentLocationDescription = location.description;
        this.currentLocationPrice = location.price;
    }
}