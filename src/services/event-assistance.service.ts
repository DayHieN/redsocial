import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventAssistanceService {

  constructor() { 
    let Assistance:Assistance[] = [
      { id: 1, event:'', user:'', assist:''},
      { id: 2, event:'', user:'', assist:''},
      { id: 3, event:'', user:'', assist:''},
      { id: 4, event:'', user:'', assist:''},
      { id: 5, event:'', user:'', assist:''},
      { id: 6, event:'', user:'', assist:''}
    ]
  }
}
