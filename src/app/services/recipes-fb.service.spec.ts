import { TestBed } from '@angular/core/testing';

import { RecipesFbService } from './recipes-fb.service';

describe('RecipesFbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesFbService = TestBed.get(RecipesFbService);
    expect(service).toBeTruthy();
  });
});
