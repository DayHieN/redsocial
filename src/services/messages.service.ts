import { Messages } from 'src/app/domain/messages.model';
import { UserserviceService } from './userservice.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
message: Messages[] = [
    { id: 1, 
      owner: this.owner.getUserById(1), 
      content:'Pizza.', 
      publish: new Date('2019/03/05')},
    { id: 2, 
      owner: this.owner.getUserById(2), 
      content:'La mejor pizza.', 
      publish: new Date('2019/03/11')},
    { id: 3, 
      owner: this.owner.getUserById(1), 
      content:'Esto es, esto es.', 
      publish: new Date('2019/03/12')},
    { id: 4, 
      owner: this.owner.getUserById(3), 
      content:'¿Dónde está el gatito?', 
      publish: new Date('2019/04/12')},
    { id: 5, 
      owner: this.owner.getUserById(4), 
      content:'Cómpramelo.', 
      publish: new Date('2019/03/14')}
  ];

  constructor (private owner: UserserviceService) {}

  getMessages (): Messages[] {
    return this.message;
  }
}


