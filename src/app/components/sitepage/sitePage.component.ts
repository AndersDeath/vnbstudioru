import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-site-page',
  templateUrl: './sitePage.component.html',
  styleUrls: ['./sitePage.component.sass']
})
export class SitePageComponent {
  AlignerHeight: any;
  mobileList: any;
  constructor() {

  }
  ngOnInit(): void {
    this.setAlignerHeight();
    window.addEventListener("resize", () => {
      this.setAlignerHeight();
    });
    this.mobileList = [
      {
        "title": "Чем заняться? Идеи!",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.randomidea",
        "ico": "randomidea.webp"
      },
      {
        "title": "HardCore Dots",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.hardcoredots",
        "ico": "hardcoredots.webp"
      },
      {
        "title": "Хокку и Танка",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.randomhokkutanka",
        "ico": "hokkutanka.webp"
      },
      {
        "title": "Генератор Паролей",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.passwordgenerator",
        "ico": "passwordgenerator.webp"
      },
      {
        "title": "Цитаты. Случайные цитаты.",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.randomquote",
        "ico": "randomquotes.webp"
      },
      {
        "title": "Circle Kill",
        "href": "https://play.google.com/store/apps/details?id=com.vnbstudio.circlekill",
        "ico": "circlekill.webp"
      }]
  }
  setAlignerHeight() {
    this.AlignerHeight = window.innerHeight - 120;
  }
}
