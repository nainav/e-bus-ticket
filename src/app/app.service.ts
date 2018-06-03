import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

// import { Observable } from 'rxjs/Observable';


import * as io from 'socket.io-client';

const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};
export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppState {
  headers: Headers;
  options: RequestOptions;

  private url = 'https://ext.digio.in:444/test/otpkyc'; 
  private socket;
  constructor(private http: Http) {
    this.headers = new Headers({
        'Content-Type': 'application/json', 'X-Auth-Token': 'me',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': true,
        'crossDomain': 'true',
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
        // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,Authorization",
        'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });

}
 public getLocation(geoLocationOptions?: any): Observable<any> {
  geoLocationOptions = geoLocationOptions || { timeout: 5000 };
  
      return Observable.create(observer => {
  
        if (window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              observer.next(position);
              observer.complete();
            },
            (error) => {
              switch (error.code) {
                case 1:
                  observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                  break;
                case 2:
                  observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                  break;
                case 3:
                  observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                  break;
              }
            },
            geoLocationOptions);
      } else {
            observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
      }
  
      });
  
  
  
    }
  
  public _state: InternalStateType = { };

  /**
   * Already return a clone of the current state.
   */
  public get state() {
    return this._state = this._clone(this._state);
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify( object ));
  }
  createService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .post(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
}
private extractData(res: Response) {
  let body = res.json();
  return body || {};
}

private handleError(error: any) {
  let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server errors';
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
