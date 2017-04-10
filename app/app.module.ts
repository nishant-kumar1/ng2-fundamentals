import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { eventsAppComponent } from './events-app.component'
// import {EventListComponent} from './events/event-list.component'
// import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {HomeComponent} from './home/home.component'
@NgModule({
    imports :  [BrowserModule],
    declarations : [eventsAppComponent, 
    // EventListComponent, 
    // EventThumbnailComponent,
    HomeComponent],
    bootstrap: [eventsAppComponent]
})

export class AppModule{

}
