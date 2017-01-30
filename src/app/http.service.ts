import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
 private _url: string = 'http://www.documenthunt.com/googjson/getIndexJSON.php';

  constructor(private _http: Http) { }

  getFurtherData(){
    
    return this._http.get(this._url)
    .map((response:Response) => response.json());

  }

}
