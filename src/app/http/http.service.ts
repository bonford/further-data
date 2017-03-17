import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {


  constructor(private _http: Http) { }

  getFurtherData(url:string){
    
    return this._http.get(url)
    .map((response:Response) => response.json());

  }

   getFurtherClouds(url:string){
    
    return this._http.get(url)
    .map((response:Response) => response.json());

  }

}
