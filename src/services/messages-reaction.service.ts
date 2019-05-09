import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesReactionService {

  constructor() {
    let Reactions:Reactions[] = [
      {id: 1, message:'', reaction:'', user:''},
      {id: 2, message:'', reaction:'', user:''},
      {id: 3, message:'', reaction:'', user:''},
      {id: 4, message:'', reaction:'', user:''},
      {id: 5, message:'', reaction:'', user:''},
      {id: 6, message:'', reaction:'', user:''}

    ]
   }
}
