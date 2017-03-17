import { Injectable} from '@angular/core';



declare var google: any;


@Injectable()
export class ResponsiveJsService{
	
   // all wired up: adjust as needed

  // private _map: SebmGoogleMap;
   constructor() {


  }

  makeResponsiveAdjustments(map:any){

    let width = document.body.clientWidth;
    let appWrapper = document.getElementById("app-wrapper");
    let sidebarWrapper = document.getElementById("sidebar-wrapper");
    let mapWrapper = document.getElementById("map-wrapper");
	  let indicesHeading = document.getElementById("indices-heading");
    map.setCenter(new google.maps.LatLng(30.508742,-0.120850));
    map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
   
   

       switch (true) {
    case (width > 1500):
      appWrapper.style.width = "1500px";
     
      break;
    case (width > 1210):
      appWrapper.style.width = "1210px";
     
      break;
     case (width > 800):
      appWrapper.style.width = "800px";
	  map.setZoom(1);
      break;  

          case (width > 680):
      appWrapper.style.width = "680px";
	  map.setZoom(1);
      break; 

           case (width < 680):
       //    sidebarWrapper.style.cssFloat = "none";
       //    mapWrapper.style.width = "100%";
     // wrapper.style.width = "100%";
	   // map.setZoom(1);
      break;  
   
    default:
    
      

     
  }
 //console.log("in switch default", window.getComputedStyle(appWrapper, "height").height);
  var message1 = document.getElementById("message1");
  message1.innerHTML = "window width: " + document.body.clientWidth ;
//console.log(window.getComputedStyle(appWrapper, "height"));
  var message2 = document.getElementById("message2");
  message2.innerHTML = "window width: " + document.body.clientWidth + "<br>" +
                       "appWrapper width: " + window.getComputedStyle(appWrapper).width + "<br>" +
                       "appWrapper height: " + window.getComputedStyle(appWrapper).height + "<br>" +
                       "mapWrapper width: " + window.getComputedStyle(mapWrapper).width + "<br>" +
                       "mapWrapper height: " + window.getComputedStyle(mapWrapper).height + "<br>" +
                       "sidebarWrapper width: " + window.getComputedStyle(sidebarWrapper).width + "<br>" +
                       "sidebarWrapper height: " + window.getComputedStyle(sidebarWrapper).height + "<br>";
                       message2.style.marginTop = "700px";
  }
  

}
