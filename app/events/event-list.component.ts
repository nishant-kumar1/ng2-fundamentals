import {Component} from '@angular/core'

@Component({
selector : 'events-list',
//templateUrl : "app/events/event-list.component.html"
template : `
    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    <!--<h3>{{thumbnail.someThumbnail}}</h3>-->
    <button class="btn btn-primary" (click)="thumbnail.logFoo()"> Click Me!! </button>
    <event-thumbnail [event]="event2"></event-thumbnail>
`
})

export class EventListComponent{
    event1 = {
        id : 1,
        name : "Angular Connect",
        date : "02-Apr-2017",
        time : "12:00 UTC",
        price : 599.99,
        location : {
            address : "NCN Gold Apartment",
            city : "Bengaluru",
            country : "India"
        }
    }
    event2 = {
        id : 2,
        name : "Angular Hi-Connect",
        date : "03-Apr-2017",
        time : "12:00 UTC",
        price : 699.99,
        location : {
            address : "Sai Sri Apartment",
            city : "Bengaluru",
            country : "India"
        }
    }
}