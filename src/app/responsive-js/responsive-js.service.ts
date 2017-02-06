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
     map.setCenter(new google.maps.LatLng(30.508742,-0.120850));
    map.setZoom(Math.ceil(Math.log2(document.body.clientWidth))-9);
   var message1 = document.getElementById("message1");
   message1.innerHTML = document.body.clientWidth + "";

       switch (true) {
    case (width > 1500):
      wrapper.style.width = "1500px";
      console.log("> 1500");
      break;
    case (width > 1200):
      wrapper.style.width = "1200px";
      console.log("> 1200");
      break;
         case (width > 900):
      wrapper.style.width = "900px";
      console.log("> 900");
      break;
   
    default:
      console.log("in switch default");
  }
  }
  

}
