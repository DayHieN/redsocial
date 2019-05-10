import { Messages } from './../../domain/messages.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msglist',
  templateUrl: './msglist.component.html',
  styleUrls: ['./msglist.component.scss']
})
export class MsglistComponent implements OnInit {

 let messages:Messages[] = []

  ngOnInit() {
  }

}
