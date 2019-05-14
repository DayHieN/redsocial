
import { Injectable } from '@angular/core';
import { MsgReactions } from 'src/app/domain/messages-reaction.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Reactions } from 'src/app/domain/reactions.model';


@Injectable({
  providedIn: 'root'
})
export class MessagesReactionService {

  constructor() {
    let Reaction:Reactions[] = [
      {id: 1, message:{ id: 1, owner:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, content:'Pizza.', publish: new Date('2019/03/05')}, reaction:{ id: 1, type:'MOLA'}, user:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }},
      {id: 2, message:{ id: 2, owner:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, content:'La mejor pizza.', publish: new Date('2019/03/11')}, reaction:{ id: 1, type:'MOLA'}, user:{ id: 4, name: 'Mastodon', surname: 'Mastodonte', nick: 'Jurassic Dude', birthday: new Date ('1/00/00'), startdate: new Date('31/1/09'), img:'../../../../../assets/mastodon.jpg' }},
      {id: 3, message:{ id: 5, owner:{ id: 6, name: 'Chica', surname: 'Mujer', nick: 'Una chica', birthday: new Date ('2006/06/21'), startdate: new Date ('2015/05/06'), img:'../../../../../assets/chica.jpg' }, content:'Cómpramelo.', publish: new Date('2019/03/14')}, reaction:{ id: 2, type:'PSSS'}, user: { id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }},
      {id: 4, message:{ id: 4, owner:{ id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }, content:'¿Dónde está el gatito?', publish: new Date('2019/04/12')}, reaction:{ id: 3, type:'PFFF'}, user:{ id: 7, name: 'Sonic', surname: 'The Hedgehog', nick: 'Erizo', birthday: new Date ('1991/06/23'), startdate: new Date ('2010/11/10'), img:'../../../../../assets/erizo.jpg' }},
      {id: 5, message:{ id: 3, owner:{ id: 3, name: 'José María', surname: 'Aznar', nick: 'Sexy Man', birthday: new Date ('1953/2/25'), startdate: new Date('2010/04/10'), img:'../../../../../assets/aznar.jpg' }, content:'Esto es, esto es.', publish: new Date('2019/03/12')}, reaction:{ id: 3, type:'PFFF'}, user:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }}

    ];
   }
}
