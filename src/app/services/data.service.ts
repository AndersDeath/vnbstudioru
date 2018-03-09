import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PathService } from './path.service';

@Injectable()
export class DataService {
  apiUrl: string;
  constructor(private http: HttpClient, private path: PathService) {
    this.apiUrl = path.getPath();
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
