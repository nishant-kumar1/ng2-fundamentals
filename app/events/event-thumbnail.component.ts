import {Component, Input} from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    template : `
    <div>
        <h3>
            Welcome to {{event.name}}
        </h3>
        <hr>
        <div class="well hoverwell thumbnail">
            <div> Date : {{event.date}} </div>
            <div> Time : {{event.time}} </div>
            <div> Price : \${{event.price}} </div>
            <div> Location : {{event.location.address}} {{event.location.city}} {{event.location.country}} </div>
        </div>
    </div>
    `,
    styles : [`
        .well div {color : #bbb}
    `]
})

export class EventThumbnailComponent{
    @Input() event:any

    //Declaring a public string variable.
    someThumbnail : string = "Hi.";

    //Declaring a public method which will be called by the event-list.component.
    logFoo(){        
        console.log("Log foo.");
    }
}



