import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ulog',
  templateUrl: './ulog.component.html',
  styleUrls: ['./ulog.component.sass']
})
export class UlogComponent implements OnInit {
  ulog: any;
  constructor(
      private data: DataService
  ) { }

  ngOnInit() {
      this.data.getUlog().subscribe((res)=>{
          console.log(res);
          this.ulog = res;
          this.ulog.reverse();
      })

  }

}
