
import { Injectable } from '@angular/core';
import { Reactions } from 'src/app/domain/messages-reaction.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class MessagesReactionService {

  constructor() {
    let Reaction:Reactions[] = [
      {id: 1, message:, reaction:, user:},
      {id: 2, message:, reaction:, user:},
      {id: 3, message:, reaction:, user:},
      {id: 4, message:, reaction:, user:},
      {id: 5, message:, reaction:, user:},
      {id: 6, message:, reaction:, user:}
    ];
   }
}
