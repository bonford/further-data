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
    let wrapper = document.getElementById("app-wrapper");
    let sidebarWrapper = document.getElementById("sidebar-wrapper");
    let mapWrapper = document.getElementById("map-wrapper");
	  let indicesHeading = document.getElementById("indices-heading");
    map.setCenter(new google.maps.LatLng(30.508742,-0.120850));
    map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
   
   

       switch (true) {
    case (width > 1500):
      wrapper.style.width = "1500px";
     
      break;
    case (width > 1210):
      wrapper.style.width = "1210px";
     
      break;
     case (width > 800):
      wrapper.style.width = "800px";
	  map.setZoom(1);
      break;  
   
    default:
    
      

      console.log("in switch default");
  }

  var message1 = document.getElementById("message1");
  message1.innerHTML = "window width: " + document.body.clientWidth ;

  var message1 = document.getElementById("message2");
  message1.innerHTML = "wrapper width: " + wrapper.style.width + "";
   
  }
  

}
