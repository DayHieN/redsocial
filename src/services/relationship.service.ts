import { Injectable } from '@angular/core';
import { Relationship } from 'src/app/domain/relationship.model.ts';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor() {
    let relationships:Relationship[] = [
      { id: 1, friend:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, otherFriend:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, pending:false},
      { id: 2, friend:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, otherFriend:{ id: 3, name: 'José María', surname: 'Aznar', nick: 'Sexy Man', birthday: new Date ('1953/2/25'), startdate: new Date('2010/04/10'), img:'../../../../../assets/aznar.jpg' }, pending:false},
      { id: 3, friend:{ id: 1, friend:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, otherFriend:{ id: 4, name: 'Mastodon', surname: 'Mastodonte', nick: 'Jurassic Dude', birthday: new Date ('1/00/00'), startdate: new Date('31/1/09'), img:'../../../../../assets/mastodon.jpg' }, pending:false},
      { id: 4, friend:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, otherFriend: { id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }, pending:false},
      { id: 5, friend:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, otherFriend:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, pending:false},
      { id: 6, friend:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, otherFriend:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, pending:false},
      { id: 7, friend:{ id: 4, name: 'Mastodon', surname: 'Mastodonte', nick: 'Jurassic Dude', birthday: new Date ('1/00/00'), startdate: new Date('31/1/09'), img:'../../../../../assets/mastodon.jpg' }, otherFriend:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, pending:false},
      { id: 8, friend:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, otherFriend:{ id: 7, name: 'Sonic', surname: 'The Hedgehog', nick: 'Erizo', birthday: new Date ('1991/06/23'), startdate: new Date ('2010/11/10'), img:'../../../../../assets/erizo.jpg' }, pending:false},
      { id: 9, friend:{ id: 7, name: 'Sonic', surname: 'The Hedgehog', nick: 'Erizo', birthday: new Date ('1991/06/23'), startdate: new Date ('2010/11/10'), img:'../../../../../assets/erizo.jpg' }, otherFriend: { id: 3, name: 'José María', surname: 'Aznar', nick: 'Sexy Man', birthday: new Date ('1953/2/25'), startdate: new Date('2010/04/10'), img:'../../../../../assets/aznar.jpg' }, pending:false},
      { id: 10, friend:{ id: 4, name: 'Mastodon', surname: 'Mastodonte', nick: 'Jurassic Dude', birthday: new Date ('1/00/00'), startdate: new Date('31/1/09'), img:'../../../../../assets/mastodon.jpg' }, otherFriend:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, pending:false}
    ];
  }
}
