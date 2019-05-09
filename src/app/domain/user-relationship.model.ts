import { Users } from 'src/app/domain/user.model';
export class UserRelationship {
    id: number;
    friend: Users;
    otherFriend: Users;
    pending: boolean;
}