import { TestBed } from '@angular/core/testing';

import { AddFavoritesService } from './add-favorites.service';

describe('AddFavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFavoritesService = TestBed.get(AddFavoritesService);
    expect(service).toBeTruthy();
  });
});
