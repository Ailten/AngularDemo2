import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateProduct } from './form-update-product';

describe('FormUpdateProduct', () => {
  let component: FormUpdateProduct;
  let fixture: ComponentFixture<FormUpdateProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUpdateProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FormUpdateProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
