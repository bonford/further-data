import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { GetMarkerObjectsDirective } from './get-marker-objects.directive';
import { MapFooterComponent } from './map-footer/map-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    GetMarkerObjectsDirective,
    MapFooterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATvHirvnVZjdtJLKrqS9CEHmuFX_3NkDQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



