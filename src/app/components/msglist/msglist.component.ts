import { MessagesService } from './../../../services/messages.service';
import { Messages } from './../../domain/messages.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msglist',
  templateUrl: './msglist.component.html',
  styleUrls: ['./msglist.component.scss']
})
export class MsglistComponent implements OnInit {

  msglist: Messages[] = [];

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.msglist = this.messagesService.getMessages();
  }

}
