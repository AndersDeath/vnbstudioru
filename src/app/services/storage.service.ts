import { Injectable } from '@angular/core';
@Injectable()
export class StorageService {
  constructor() {
    this.checkSearchTbl();
  }

  checkSearchTbl() {
    var cleanTbl = [];
    var tbl = localStorage.getItem("OWLSearch");
    if (tbl === null) {
      localStorage.setItem("OWLSearch", JSON.stringify(cleanTbl));
    }
  }
  getSearchTable(): any[] {
    var tbl: string;
    tbl = localStorage.getItem("OWLSearch");
    return JSON.parse(tbl);
  }
  setSearchTable(obj) {
    let tbl: any;
    tbl = this.getSearchTable();
    tbl.push({
      type: obj.type,
      text: obj.text,
      date: obj.date
    });
    localStorage.setItem("OWLSearch", JSON.stringify(tbl));
  }

  cleanSearchTable() {
    localStorage.setItem("OWLSearch", JSON.stringify([]));
  }
}
