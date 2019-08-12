import { TestBed, async, inject } from '@angular/core/testing';

import { TesterGuard } from './tester.guard';

describe('TesterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesterGuard]
    });
  });

  it('should ...', inject([TesterGuard], (guard: TesterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
