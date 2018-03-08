import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
  apiUrl: string = 'http://course.loc/';
  constructor(private http: HttpClient) {

  }

  public getData() {
    return this.http.get(this.apiUrl + 'link/');
  }

  public getSearchHistory() {
    return this.http.get(this.apiUrl + 'search/get/');
  }

  public setSearchHistory(text: string, typeId: string) {
    const options =
      {
        params: new HttpParams().set('text', text).set('type', typeId),
      };

    return this.http.get(this.apiUrl + 'search/set/', options);
  }
}
