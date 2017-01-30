import { Directive, Output, EventEmitter, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import {SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Directive({
  selector: 'get-marker-objects',
})
export class MarkerObjectsDirective implements AfterViewInit {

  

 

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


 

  constructor() { }

  ngAfterViewInit() {
    
  

    // get markers
    this.markerChildren.changes.subscribe(markers => {
      this.markers = markers._results;
    })

   
  }
}