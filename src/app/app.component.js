"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Event Hub';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'eh-app',
        template: "\n    <div>\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a href=\"/\" class=\"navbar-brand\">{{pageTitle}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n          \n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"locations\">Locations</a></li>\n            <li><a>Event Ideas</a></li>\n            <li><a>Catering</a></li>\n            <li><a>Login</a></li>\n            <li><a class=\"btn btn-register\">Sign up</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map