import { TestBed } from '@angular/core/testing';

import { AddUserRecipeService } from './add-user-recipe.service';

describe('AddUserRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddUserRecipeService = TestBed.get(AddUserRecipeService);
    expect(service).toBeTruthy();
  });
});
