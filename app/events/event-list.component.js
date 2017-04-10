"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EventListComponent = (function () {
    function EventListComponent() {
        this.event1 = {
            id: 1,
            name: "Angular Connect",
            date: "02-Apr-2017",
            time: "12:00 UTC",
            price: 599.99,
            location: {
                address: "NCN Gold Apartment",
                city: "Bengaluru",
                country: "India"
            }
        };
        this.event2 = {
            id: 2,
            name: "Angular Hi-Connect",
            date: "03-Apr-2017",
            time: "12:00 UTC",
            price: 699.99,
            location: {
                address: "Sai Sri Apartment",
                city: "Bengaluru",
                country: "India"
            }
        };
    }
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        //templateUrl : "app/events/event-list.component.html"
        template: "\n    <event-thumbnail #thumbnail [event]=\"event1\"></event-thumbnail>\n    <!--<h3>{{thumbnail.someThumbnail}}</h3>-->\n    <button class=\"btn btn-primary\" (click)=\"thumbnail.logFoo()\"> Click Me!! </button>\n    <event-thumbnail [event]=\"event2\"></event-thumbnail>\n"
    })
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map