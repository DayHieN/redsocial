import { Injectable } from '@angular/core';
import { Reactions } from 'src/app/domain/reactions.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  constructor() {
    let Reaction:Reactions [] = [
      { id: 1, type:'MOLA'},
      { id: 2, type:'PSSS'},
      { id: 3, type:'PFFF'}
    ];
   }
}
