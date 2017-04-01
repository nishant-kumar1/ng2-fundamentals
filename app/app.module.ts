import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { eventsAppComponent } from './events-app.component'
@NgModule({
    imports :  [BrowserModule],
    declarations : [eventsAppComponent],
    bootstrap: [eventsAppComponent]
})

export class AppModule{

}
