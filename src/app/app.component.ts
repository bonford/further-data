import { ViewChild, ViewChildren, ElementRef} from '@angular/core';
import { Component, HostListener } from '@angular/core';
import {HttpService} from './http/http.service';
import {SebmGoogleMapMarker, SebmGoogleMapInfoWindow, GoogleMapsAPIWrapper, MarkerManager} from 'angular2-google-maps/core';
import { MarkerObjectsDirective } from './marker-objects/marker-objects.directive';
import { ResponsiveJsService } from './responsive-js/responsive-js.service'
import { MapFooterComponent } from './map-footer/map-footer.component';
declare var google: any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, GoogleMapsAPIWrapper, ResponsiveJsService]
})



export class AppComponent {


  @ViewChild('infoWindow') infoDiv;  
  
 
  private markers: SebmGoogleMapMarker[]; 
  private map: any;
  private infoWindows: SebmGoogleMapInfoWindow[];
  private date = new Date();

  _lat: number = -30.601753;
  _lng: number = 40.369636;
  _zoom: number = 1;
  stocks: any[];
  constructor( private _httpService: HttpService, private _googleMapsAPIWrapper: GoogleMapsAPIWrapper, private _responsiveJsService: ResponsiveJsService){
       
  }


  ngOnInit(){
    this._httpService.getFurtherData()
    .subscribe(resFurtherData => this.stocks = resFurtherData);
  }

 

  setMarkers(markers: SebmGoogleMapMarker[]){
    this.markers = markers;
    // console.log('in set markers', markers);    
  }  

   setMap(map: any){
    this.map = map;
     map.setCenter(new google.maps.LatLng(30.508742,0.120850));
    map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
     console.log('in set map', map);    
  }  
 
  onResize(event) {
    let width = document.body.clientWidth;
     this.map.setCenter(new google.maps.LatLng(30.508742,-0.120850));
    this.map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
   var message1 = document.getElementById("message1");
   message1.innerHTML = document.body.clientWidth + "";

   if (width < 1341){
    this.map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-10);
   }
}

  listClick(i){
    this.markers[i].infoWindow.open();
   // console.log(this.stocks[15].c)
   }

  
 
}


