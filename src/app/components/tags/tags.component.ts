import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent {
  tags: string = '';
  constructor(
  ) {

  }

  public ngOnInit(): void {

  }
  public convert(): void {
    console.log(this.tags);
    if (this.tags.length > 0) {
      let newString = '';
      let test = this.tags.split(',');
      for (let i in test) {
        let q = test[i].trim().replace(/ +/g, '');
        newString += ' #' + q.toLowerCase();
      }
      this.tags = newString;
    }
  }

}
