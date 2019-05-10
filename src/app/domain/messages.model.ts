import { Users } from './user.model';

export class Messages {
    id: number;
    owner: Users;
    content: string;
    publish: Date;
}