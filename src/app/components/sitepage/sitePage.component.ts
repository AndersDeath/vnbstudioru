import { Component, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-site-page',
  templateUrl: './sitePage.component.html',
  styleUrls: ['./sitePage.component.sass']
})
export class SitePageComponent {
  mobileList: any;
  chatData = {};
  constructor(public dialog: MatDialog) {

  }
  openDialog(): void {
    let dialogRef = this.dialog.open(Chat, {
      width: '600px',
      data: this.chatData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.chatData = result;
    });
  }

  ngOnInit(): void {
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
}



@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
})
export class Chat {

  constructor(
    public dialogRef: MatDialogRef<Chat>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
