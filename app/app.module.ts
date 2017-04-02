import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { eventsAppComponent } from './events-app.component'
import {EventListComponent} from './events/event-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavigationBarComponent} from './navigation/nav-bar.component'
@NgModule({
    imports :  [BrowserModule],
    declarations : [eventsAppComponent, 
    EventListComponent, 
    EventThumbnailComponent,
    NavigationBarComponent],
    bootstrap: [eventsAppComponent]
})

export class AppModule{

}
