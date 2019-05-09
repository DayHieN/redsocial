import { Injectable } from '@angular/core';
import { Users } from 'src/app/domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() {
    let User:Users[] = [
       { id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' },
       { id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  },
       { id: 3, name: 'José María', surname: 'Aznar', nick: 'Sexy Man', birthday: new Date ('1953/2/25'), startdate: new Date('2010/04/10'), img:'../../../../../assets/aznar.jpg' },
       { id: 4, name: 'Mastodon', surname: 'Mastodonte', nick: 'Jurassic Dude', birthday: new Date ('1/00/00'), startdate: new Date('31/1/09'), img:'../../../../../assets/mastodon.jpg' },
       { id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' },
       { id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' },
       { id: 7, name: 'Sonic', surname: 'The Hedgehog', nick: 'Erizo', birthday: new Date ('1991/06/23'), startdate: new Date ('2010/11/10'), img:'../../../../../assets/erizo.jpg' }
    ];
   }
}
