import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  AlignerHeight: any;
  searchValue: string;
  searchToggle: string = 'yandexSearch';
  searchHistory: any = [];
  constructor(private storage: StorageService) {

  }
  ngOnInit(): void {
    this.searchValue = '';
    let dataHistory = this.storage.getSearchTable();
    this.searchHistory = dataHistory.reverse();
    document.addEventListener('keyup', event => {
      if (event.keyCode == 13) {
        this.startSearch();
      }
    });
  }
  startSearch() {
    let type;
    if (this.searchToggle === "yandexSearch") {
      window.open('https://yandex.ru/search/?text=' + this.searchValue, '_blank');
      type = "yandex";
    }
    if (this.searchToggle === "googleSearch") {
      window.open('https://www.google.ru/#newwindow=1&q=' + this.searchValue, '_blank');
      type = "google";
    }
    let obj = {
        type:type,
        text: this.searchValue,
        date: new Date()
    }
    this.storage.setSearchTable(obj);
    this.searchHistory.unshift(obj);
    this.searchValue = '';
    return;
  }

  searchFromHistory(text, type) {
    if (type === "yandex") {
      window.open('https://yandex.ru/search/?text=' + text, '_blank');
    }
    if (type === "google") {
      window.open('https://www.google.ru/#newwindow=1&q=' + text, '_blank');
    }
    return;
  }
  cleanHistory(){
      this.searchHistory = [];
      this.storage.cleanSearchTable();
  }
}
