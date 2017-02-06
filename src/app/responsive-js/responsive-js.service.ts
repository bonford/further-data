import { Injectable} from '@angular/core';
//import { SebmGoogleMap } from 'angular2-google-maps/core';
import { MarkerObjectsDirective } from '../marker-objects/marker-objects.directive';


declare var breaky: any;
declare var google: any;


@Injectable()
export class ResponsiveJsService{
	
   // all wired up: adjust as needed

  // private _map: SebmGoogleMap;
   constructor() {
	/*  
	document.addEventListener("DOMContentLoaded", function(event) {
     console.log('in responsivejs constructor', document)
	//Optional Fix for IE8
	breaky.initIE8(["mobile","tablet","desktop"], "desktop");

	var message1 = document.getElementById("message1");
	var message2 = document.getElementById("message2");
	var message3 = document.getElementById("message3");
	


	// First Message
	breaky.at("mobile", function() {
		message1.innerHTML = "service mobile";

		// see http://stackoverflow.com/questions/10118172/setting-div-width-and-height-in-javascript
		
	});

	breaky.at("tablet", function() {
		message1.innerHTML = "service tablet";
		//map.setAttribute("style","width:100px; height:100px");
	});

	breaky.at("desktop", function() {
		message1.innerHTML = "service desktop";
		//map.setAttribute("style","width:100%; height:100%");
	});


	// Second Message
	breaky.below("tablet", function() {
		message2.innerHTML = "tablet and below";
	});
	breaky.above("desktop", function() {
		message2.innerHTML = "deskop and above";
	});

	//Third Message
	breaky.between("mobile", "desktop", function() {
		message3.innerHTML = "between mobile and desktop";
	});
});
    
*/

  }

   

  ngAdjustMap(map:any) {
	   map.setCenter(new google.maps.LatLng(30.508742,-0.120850));
  map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
var message1 = document.getElementById("message1");
console.log('in ngAdjustMap', document.body.clientWidth);
 /* breaky.at("desktop", function() {
		message1.innerHTML = "service desktop";
		//map.setAttribute("style","width:100%; height:100%");
	});
  
	*/


} 
  

}
