import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PathService} from '../../services/path.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  url: string = 'http://course.loc/img/';
  gitHubData: any[];
  mobileList: any[];
  siteList: any[];
  skillsArr: any[];
  constructor(private data: DataService, private path: PathService) {
      this.url = this.path.getStorage();
  }
  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.gitHubData = data['links']['github'];
      this.mobileList = data['links']['mobile'];
      this.siteList = data['links']['site'];
      this.skillsArr = data['skills'];
    });
  }
  goTo(href) {
    window.open(href, '_blank');
  }
  search(text){
    window.open('https://yandex.ru/search/?text=Что такое ' + text + '? Технология. Википедия', '_blank');
  }
}
