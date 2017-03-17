import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.css'],
  providers: [HttpService]
})
export class CloudsComponent implements OnInit {

  movers: any[];

  constructor( private _httpService: HttpService) { }

  ngOnInit() {
     this._httpService.getFurtherClouds('http://www.documenthunt.com/googjson/getIndexJSON.php')
    .subscribe(resMoverData => this.movers = resMoverData);
    console.log("in clouds component", this.movers);
   //this.printResult();
  }

  printResult(){
    // console.clear();
   // console.log("in clouds component", this.movers);

  }

}
