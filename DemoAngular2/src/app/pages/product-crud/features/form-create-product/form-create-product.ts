import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/productService/product-service';

@Component({
  selector: 'app-form-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-product.html',
  styleUrl: './form-create-product.scss',
})
export class FormCreateProduct {

  private readonly _formBuilder = inject(FormBuilder);
  private readonly _productService = inject(ProductService);

  createProduct: FormGroup = this._formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    price: [10.0, { validators: [Validators.required, Validators.min(1.0)] }],
  });

  submit($event: SubmitEvent) {
    $event.preventDefault();
    this.createProduct.markAllAsTouched();

    this._productService.insert(this.createProduct.value as any).subscribe({
      next: (response) => {  // success.
        console.log('insert successfully');
        console.log(response);
      },
      error: (error) => {  // error.
        console.error('form submit error !');
        console.error(error.name);
        console.error(error.message);
      }
    });

  }

}
