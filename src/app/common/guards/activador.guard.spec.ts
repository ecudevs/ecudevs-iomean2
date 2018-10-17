import { TestBed, async, inject } from '@angular/core/testing';

import { ActivadorGuard } from './activador.guard';

describe('ActivadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivadorGuard]
    });
  });

  it('should ...', inject([ActivadorGuard], (guard: ActivadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
