import { Directive, Output, EventEmitter, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { GoogleMapsAPIWrapper, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Directive({
  selector: 'get-marker-objects',
})
export class MarkerObjectsDirective implements AfterViewInit {

  /**
   * Get map
   */
  private _map: any = null;
  @Output('map') mapChanged: EventEmitter<any> = new EventEmitter<any>();
  set map(val){
    this._map = val;
    this.mapChanged.emit(val);
  }
  get map(){
    return this._map;
  }
 

  

 

  /**
   * Get sebm markers
   */
  private _markers: any = null;
  @Output('markers') markersChanged: EventEmitter<SebmGoogleMapMarker[]> = new EventEmitter<SebmGoogleMapMarker[]>();
  set markers(val){
    this._markers = val;
    this.markersChanged.emit(val);
  }
  get markers(){
    return this._markers;
  }
  @ContentChildren(SebmGoogleMapMarker) markerChildren: QueryList<SebmGoogleMapMarker>;


 

  constructor(private _googleMapsWrapper:GoogleMapsAPIWrapper) { }

  ngAfterViewInit() {

 // get native map
    this._googleMapsWrapper.getNativeMap().then(map => {
      this.map = map; 
      console.log('in marker-objects, getting map', this.map);     
    }, error => {
      throw error;
    })

    // get markers
    this.markerChildren.changes.subscribe(markers => {
      this.markers = markers._results;
    })

   
  }
}