import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGetProductById } from './form-get-product-by-id';

describe('FormGetProductById', () => {
  let component: FormGetProductById;
  let fixture: ComponentFixture<FormGetProductById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGetProductById],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGetProductById);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
