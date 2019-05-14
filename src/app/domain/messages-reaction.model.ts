import { Users } from 'src/app/domain/user.model';
import { Messages } from './messages.model';

export class MsgReactions {
    id: number;
    message: Messages;
    reaction: MsgReactions;
    user: Users;
}
