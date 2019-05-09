import { UserRelationshipService } from './user-relationship.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRelationshipService {

  constructor() {
    let UserRelationship:UserRelationship[] [
      { id: 1, friend:'', otherFriend:'', pending:''},
      { id: 2, friend:'', otherFriend:'', pending:''},
      { id: 3, friend:'', otherFriend:'', pending:''},
      { id: 4, friend:'', otherFriend:'', pending:''},
      { id: 5, friend:'', otherFriend:'', pending:''},
    ]
   }
}
