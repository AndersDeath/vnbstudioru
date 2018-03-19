import { Component, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../services/data.service';
import { PathService } from '../../services/path.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-page',
  templateUrl: './sitePage.component.html',
  styleUrls: ['./sitePage.component.sass']
})
export class SitePageComponent {
  mobileList: any[];
  chatData = [];
  url: string;

  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private path: PathService,
    private router: Router
  ) {
    this.url = this.path.getStorage();
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("goto");
    if (c === 'i') {
      this.router.navigate(['i']);
    } else if (c === 'tags') {
      this.router.navigate(['tags']);
    }
    else if (c === 'lvmps') {
      this.router.navigate(['lvmps']);
    } else if (c === 'ulog') {
      this.router.navigate(['ulog']);
    } else {
      this.router.navigate(['']);
    }
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
  data: any = {
    name: '',
    email: '',
    text: ''
  };
  captchaTest: boolean = false
  dataForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<Chat>,
    private http: DataService,
    public snackBar: MatSnackBar
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      name: new FormControl(this.data.name, [
        Validators.required
      ]),
      email: new FormControl(this.data.email, [
        Validators.email,
        Validators.required
      ]),
      text: new FormControl(this.data.text, [
        Validators.required
      ])
    })
  }

  get name() {
    return this.dataForm.get('name');
  }

  get email() {
    return this.dataForm.get('email');
  }

  get text() {
    return this.dataForm.get('text');
  }

  ifCaptchaCorrect(res) {
    this.http.checkCaptcha(res).subscribe((res: any) => {
      console.log(JSON.parse(res));
      if (JSON.parse(res).success) {
        this.captchaTest = true;
      }
    });
  }

  cancel(): void {
    this.data = {
      name: '',
      email: '',
      text: ''
    }
    this.dialogRef.close();
  }

  ok() {
    this.http.sendMessage(this.data.name, this.data.email, this.data.text).subscribe((res: any) => {
      if (res.messageId !== 'false') {
        this.snackBar.open('Cпасибо! Сообщение успешно отправлено.', '', {
          duration: 3000
        });
      }
    });
    this.dialogRef.close();
  }

}
