import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateProduct } from './form-create-product';

describe('FormCreateProduct', () => {
  let component: FormCreateProduct;
  let fixture: ComponentFixture<FormCreateProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCreateProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
