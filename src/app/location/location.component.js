"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var location_service_1 = require("./location.service");
var LocationComponent = (function () {
    function LocationComponent(_locationService) {
        this._locationService = _locationService;
        this.queryOptions = {
            id: null,
            text: '',
            type: '',
            location: 'Any',
            eventType: 'Any',
            minPrice: null,
            maxPrice: null,
            guests: 0
        };
        this.cities = ["Any", "Berlin", "Bremen", "Cologne", "Frankfurt", "Hamburg", "Kassel", "Leipzig", "Munich"];
        this.filterGuestsText = 'Any';
        this.currentLocationDescription = '';
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.queryOptions.guests > 0 && this.queryOptions.guests <= 400) {
            this.filterGuestsText = ' - 99';
        }
        this._locationService.getAll(this.queryOptions)
            .subscribe(function (locations) { return _this.locations = locations; }, function (error) { return _this.errorMessage = error; });
    };
    LocationComponent.prototype.seach = function () {
        var _this = this;
        if (this.queryOptions.minPrice && this.queryOptions.maxPrice) {
            var range = this.swipeRange(this.queryOptions.minPrice, this.queryOptions.maxPrice);
            this.queryOptions.minPrice = range.minPrice;
            this.queryOptions.maxPrice = range.maxPrice;
        }
        console.log(this.queryOptions);
        this._locationService.getAll(this.queryOptions)
            .subscribe(function (locations) { return _this.locations = locations; }, function (error) { return _this.errorMessage = error; });
    };
    LocationComponent.prototype.swipeRange = function (min, max) {
        var range = {
            minPrice: null,
            maxPrice: null
        };
        if (min > max) {
            range.maxPrice = min;
            range.minPrice = max;
        }
        else {
            range.maxPrice = max;
            range.minPrice = min;
        }
        return range;
    };
    LocationComponent.prototype.showInfo = function (location) {
        this.currentLocationDescription = location.description;
        this.currentLocationPrice = location.price;
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    core_1.Component({
        selector: 'eh-lc',
        templateUrl: "app/location/location.component.html"
    }),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationComponent);
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map