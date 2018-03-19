import { Component, Input } from '@angular/core';
import {PathService} from '../../services/path.service';

@Component({
  selector: 'app-material-accordion-list',
  templateUrl: './materialAccordionList.component.html',
  styleUrls: ['./materialAccordionList.component.sass']
})

export class MaterialAccordionListComponent {
  @Input() items: object;
  @Input() title: string;
  @Input() tooltip: boolean = true;
  storageUrl: string;
  constructor(private path: PathService) {
      this.storageUrl =  this.path.getStorage();
  }
  ngOnInit(): void {
  }

  goTo(href) {
    window.open(href, '_blank');
  }
}
