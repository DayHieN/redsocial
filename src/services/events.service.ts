import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {
    let Events:Events[] = [
      {id: 1, description:'', date: new Date('')},
      {id: 2, description:'', date: new Date('')},
      {id: 3, description:'', date: new Date('')},
      {id: 4, description:'', date: new Date('')}
    ]
   }
}
