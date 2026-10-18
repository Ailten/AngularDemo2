import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteProduct } from './form-delete-product';

describe('FormDeleteProduct', () => {
  let component: FormDeleteProduct;
  let fixture: ComponentFixture<FormDeleteProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeleteProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDeleteProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
