import { Users } from 'src/app/domain/user.model';
import { Events } from 'src/app/domain/events.model';

export class EventAssistance {
    id: number;
    event: Events;
    user: Users;
    assist: boolean;
}