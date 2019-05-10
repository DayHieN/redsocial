import { Users } from 'src/app/domain/user.model';
export class Relationship {
    id: number;
    friend: Users;
    otherFriend: Users;
    pending: boolean;
}