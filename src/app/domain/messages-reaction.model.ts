import { Reactions } from 'src/app/domain/reactions.model';
import { Users } from 'src/app/domain/user.model';
import { Messages } from './messages.model';

export class MsgReactions {
    id: number;
    message: Messages;
    reaction: Reactions;
    user: Users;
}
