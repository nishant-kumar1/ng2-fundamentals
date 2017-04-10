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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        //Declaring a public string variable.
        this.someThumbnail = "Hi.";
    }
    //Declaring a public method which will be called by the event-list.component.
    EventThumbnailComponent.prototype.logFoo = function () {
        console.log("Log foo.");
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n    <div>\n        <h3>\n            Welcome to {{event.name}}\n        </h3>\n        <hr>\n        <div class=\"well hoverwell thumbnail\">\n            <div> Date : {{event.date}} </div>\n            <div> Time : {{event.time}} </div>\n            <div> Price : ${{event.price}} </div>\n            <div> Location : {{event.location.address}} {{event.location.city}} {{event.location.country}} </div>\n        </div>\n    </div>\n    ",
        styles: ["\n        .well div {color : #bbb}\n    "]
    })
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map