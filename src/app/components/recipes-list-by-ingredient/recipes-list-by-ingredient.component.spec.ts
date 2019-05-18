import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListByIngredientComponent } from './recipes-list-by-ingredient.component';

describe('RecipesListByIngredientComponent', () => {
  let component: RecipesListByIngredientComponent;
  let fixture: ComponentFixture<RecipesListByIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListByIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
