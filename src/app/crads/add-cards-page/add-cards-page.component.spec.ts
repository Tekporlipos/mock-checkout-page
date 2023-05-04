import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardsPageComponent } from './add-cards-page.component';

describe('AddCardsPageComponent', () => {
  let component: AddCardsPageComponent;
  let fixture: ComponentFixture<AddCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
