import { Component, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../services/data.service';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './sitePage.component.html',
  styleUrls: ['./sitePage.component.sass']
})
export class SitePageComponent {
  mobileList: any[];
  chatData = [];
  url:string;

  constructor(
      public dialog: MatDialog,
      private data: DataService,
      private path: PathService
  ) {
      this.url = this.path.getStorage();
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
    this.data.getData().subscribe(data => {
      this.mobileList = data['links']['mobile'].reverse();
    });
  }
}



@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
})
export class Chat {
  data;
  constructor(
    public dialogRef: MatDialogRef<Chat>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
