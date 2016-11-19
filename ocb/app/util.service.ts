import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// TODO: ler esse tutorial
// https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class UtilService {

  constructor(private http: Http){}

  getLoremIpsum() : Observable<Array<string>>{
    return this.http.get('https://www.dogeipsum.com/api/?type=doge-and-ipsum&sentences=1&format=json').map(this.extractSentence).catch(this.handleError);
  }

  getRandomString(length: number) : string {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result : string = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  private extractSentence(res: Response) {
    console.log(res.json());
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private extractString(res: Response) {
    console.log(res.json());
    let body = res.json();
    return body;
  }
}
