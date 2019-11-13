import { TestBed } from '@angular/core/testing';

import { ShareTasksService } from './share-tasks.service';

describe('ShareTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareTasksService = TestBed.get(ShareTasksService);
    expect(service).toBeTruthy();
  });
});
