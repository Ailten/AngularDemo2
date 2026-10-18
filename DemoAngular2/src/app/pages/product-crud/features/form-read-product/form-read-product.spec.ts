import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReadProduct } from './form-read-product';

describe('FormReadProduct', () => {
  let component: FormReadProduct;
  let fixture: ComponentFixture<FormReadProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReadProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FormReadProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
