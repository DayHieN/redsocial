import { UserserviceService } from './userservice.service';
import { Injectable } from '@angular/core';
import { Messages } from 'src/app/domain/messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() {
    let Message:Messages[] = [
      { id: 1, owner:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, content:'Pizza.', publish: new Date('2019/03/05')},
      { id: 2, owner:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, content:'La mejor pizza.', publish: new Date('2019/03/11')},
      { id: 3, owner:{ id: 3, name: 'José María', surname: 'Aznar', nick: 'Sexy Man', birthday: new Date ('1953/2/25'), startdate: new Date('2010/04/10'), img:'../../../../../assets/aznar.jpg' }, content:'Esto es, esto es.', publish: new Date('2019/03/12')},
      { id: 4, owner:{ id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }, content:'¿Dónde está el gatito?', publish: new Date('2019/04/12')},
      { id: 5, owner:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, content:'Cómpramelo.', publish: new Date('2019/03/14')}
    ];

  }
}
