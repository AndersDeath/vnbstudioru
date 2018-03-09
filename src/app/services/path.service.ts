import { Injectable } from '@angular/core';

@Injectable()
export class PathService {
  mode = 'dev';
  apiUrl: string = (this.mode === 'dev') ? 'http://course.loc/' : 'http://api.vnbstudio.ru/';

  constructor() {

  }

  public getPath(): string {
    return this.apiUrl;
  }

  public getStorage(): string {
    return this.apiUrl + '/img/';
  }

}
