import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DocumentosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DocumentosService {

  private apiURL = 'https://assinatura.herokuapp.com/api/documentos/';
  data: any;

  constructor(public http: Http) {
    console.log('Hello DocumentosService Provider');
  }

  load() {
    return this.http.get(this.apiURL)
    .map(res => res.json());



    // // if (this.data) {
    // //   // already loaded data
    // //   return Promise.resolve(this.data);
    // // }

    // // don't have the data yet
    // return new Promise(resolve => {
    //   // We're using Angular HTTP provider to request the data,
    //   // then on the response, it'll map the JSON data to a parsed JS object.
    //   // Next, we process the data and resolve the promise with the new data.
    //   this.http.get(this.apiURL)
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       // we've got back the raw data, now generate the core schedule data
    //       // and save the data for later reference
    //       this.data = data;
    //       resolve(this.data);
    //     });
    // });
  }

  saveRec(data) {
  //let headers = new Headers({ 'Content-Type': 'text/html; charset=utf-8'});
  //let options = new RequestOptions({ headers: headers });
  // let body = JSON.stringify(data);
  console.log(data);
  return this.http.post(
    this.apiURL,
    data,
    /*headers*/).map((res: Response) => res.json()).subscribe(data => {console.log(data)});
}

}
