import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { 
    let Messages:Messages[] = [
      { id: 1, owner:'', content:'', publish: new Date('')},
      { id: 2, owner:'', content:'', publish: new Date('')},
      { id: 3, owner:'', content:'', publish: new Date('')},
      { id: 4, owner:'', content:'', publish: new Date('')},
      { id: 5, owner:'', content:'', publish: new Date('')},
      { id: 6, owner:'', content:'', publish: new Date('')},
      { id: 7, owner:'', content:'', publish: new Date('')}
    ]
    
  }
}
