import { Users } from 'src/app/domain/user.model';
import { Messages } from './messages.model';

export class Reactions {
    id: number;
    message: Messages;
    reaction: Reactions;
    user: Users;
}