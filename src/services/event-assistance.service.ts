import { EventAssistance } from './../app/domain/event-assistance.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventAssistanceService {

  constructor() {
    const EventAssistance: EventAssistanceService[] = [
      { id: 1, event:{id: 1, description:'Pizza en mi casa!', date: new Date('2016/02/10')} , user:{ id: 1, name: 'Ricardo', surname: 'Milos', nick: 'Sexy Man', birthday: new Date ('1977/11/11'), startdate: new Date('2003/02/05'), img:'../../../../../assets/user_avatar.jpg' }, assist:true },
      { id: 2, event:{id: 2, description:'Pizza en tu casa!', date: new Date('2016/04/14')} , user:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, assist:true },
      { id: 3, event:{id: 3, description:'Pizza en casa de tu madre!', date: new Date('2017/05/03')} , user:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, assist:true },
      { id: 4, event:{id: 4, description:'No queda pizza, hay que comprar más.', date: new Date('2019/05/10')} , user:{ id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }, assist:true },
      { id: 5, event:{id: 3, description:'Pizza en casa de tu madre!', date: new Date('2017/05/03')} , user:{ id: 5, name: 'Chico', surname: 'Hombre', nick: 'Un chico', birthday: new Date ('2007/04/07'), startdate: new Date('2012/04/09'), img:'../../../../../assets/chico.jpg' }, assist:true },
      { id: 6, event:{id: 4, description:'No queda pizza, hay que comprar más.', date: new Date('2019/05/10')} , user:{ id: 2, name: 'Jose', surname: 'José', nick: 'Amor', birthday: new Date ('1982/10/03'), startdate:new Date ('2008/02/01'), img:'../../../../../assets/jose.jpg'  }, assist:true }
    ];
  }
}
