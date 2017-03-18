import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.css'],
  providers: [HttpService]
})
export class CloudsComponent implements OnInit {

  priceMovers;
  volumeMovers;
  fontFactor = 1.5;


  constructor( private _httpService: HttpService) { }

  ngOnInit() {
     this._httpService.getFurtherClouds('http://www.documenthunt.com/googjson/handleclouds.php?type=pricedeltas')
    .subscribe(resMoverData => this.priceMovers = resMoverData);


     this._httpService.getFurtherClouds('http://www.documenthunt.com/googjson/handleclouds.php?type=volumedeltas')
    .subscribe(resMoverData => this.volumeMovers = resMoverData);
    console.log("in clouds component", this.volumeMovers);
   //this.printResult();
  }

  printResult(){
    // console.clear();
   // console.log("in clouds component", this.movers);

  }

}
