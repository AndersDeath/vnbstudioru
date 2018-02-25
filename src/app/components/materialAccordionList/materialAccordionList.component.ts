import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-material-accordion-list',
    templateUrl: './materialAccordionList.component.html',
    styleUrls: ['./materialAccordionList.component.sass']
})

export class MaterialAccordionListComponent {
    @Input() items: object;
    @Input() title: string;
    constructor() {

    }
    ngOnInit(): void {
    }

    goTo(href) {
        window.open(href, '_blank');
    }
}
