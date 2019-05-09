import { TestBed } from '@angular/core/testing';

import { MessagesReactionService } from './messages-reaction.service';

describe('MessagesReactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesReactionService = TestBed.get(MessagesReactionService);
    expect(service).toBeTruthy();
  });
});
