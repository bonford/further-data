import { Injectable } from '@angular/core';

declare var breaky: any;



@Injectable()
export class ResponsiveJsService {
   // all wired up: adjust as needed
   constructor() {

 // todo: get map object from marker-object service and use to adjust map sizes  
 /* 
    document.addEventListener("DOMContentLoaded", function(event) {

	//Optional Fix for IE8
	breaky.initIE8(["mobile","tablet","desktop"], "desktop");

	var message1 = document.getElementById("message1");
	var message2 = document.getElementById("message2");
	var message3 = document.getElementById("message3");
	var map = document.getElementById("map1");


	// First Message
	breaky.at("mobile", function() {
		message1.innerHTML = "mobile";

		// see http://stackoverflow.com/questions/10118172/setting-div-width-and-height-in-javascript
		map.setAttribute("style","width:50px; height:50px");
	});

	breaky.at("tablet", function() {
		message1.innerHTML = "tablet";
		map.setAttribute("style","width:100px; height:100px");
	});

	breaky.at("desktop", function() {
		message1.innerHTML = "desktop";
		map.setAttribute("style","width:100%; height:100%");
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
  

}
