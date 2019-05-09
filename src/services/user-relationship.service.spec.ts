import { TestBed } from '@angular/core/testing';

import { UserRelationshipService } from './user-relationship.service';

describe('UserRelationshipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRelationshipService = TestBed.get(UserRelationshipService);
    expect(service).toBeTruthy();
  });
});
