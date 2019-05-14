import { Events } from 'src/app/domain/events.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {
    let Event:Events[] = [
      {id: 1, description:'Pizza en mi casa!', date: new Date('2016/02/10')},
      {id: 2, description:'Pizza en tu casa!', date: new Date('2016/04/14')},
      {id: 3, description:'Pizza en casa de tu madre!', date: new Date('2017/05/03')},
      {id: 4, description:'No queda pizza, hay que comprar más.', date: new Date('2019/05/10')}
    ];
   }
}
