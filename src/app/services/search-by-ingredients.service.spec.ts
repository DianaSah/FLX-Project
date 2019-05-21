import { TestBed } from '@angular/core/testing';

import { SearchByIngredientsService } from './search-by-ingredients.service';

describe('SearchByIngredientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchByIngredientsService = TestBed.get(SearchByIngredientsService);
    expect(service).toBeTruthy();
  });
});
