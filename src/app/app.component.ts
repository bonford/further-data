import { ViewChild, ViewChildren, ElementRef} from '@angular/core';
import { Component } from '@angular/core';
import {HttpService} from './http/http.service';
import {SebmGoogleMapMarker, SebmGoogleMapInfoWindow, GoogleMapsAPIWrapper, MarkerManager} from 'angular2-google-maps/core';
import { MarkerObjectsDirective } from './marker-objects/marker-objects.directive';
import { MapFooterComponent } from './map-footer/map-footer.component';
declare var google: any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, GoogleMapsAPIWrapper]
})
export class AppComponent {

 
  @ViewChild('infoWindow') infoDiv;  
  
 
  private markers: SebmGoogleMapMarker[]; 
  private infoWindows: SebmGoogleMapInfoWindow[];
  private date = new Date();

  _lat: number = -30.601753;
  _lng: number = 40.369636;
  _zoom: number = 1;
  stocks: any[];
  constructor( private _httpService: HttpService, private _googleMapsAPIWrapper: GoogleMapsAPIWrapper){
       
  }


  ngOnInit(){
    this._httpService.getFurtherData()
    .subscribe(resFurtherData => this.stocks = resFurtherData);
  }

 

  setMarkers(markers: SebmGoogleMapMarker[]){
    this.markers = markers;
    // console.log('in set markers', markers);    
  }  
 
  

  listClick(i){
    this.markers[i].infoWindow.open();
   }

  
 
}


