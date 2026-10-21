import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { FormGetProductById } from '../form-get-product-by-id/form-get-product-by-id';
import { Product } from '../../../../models/products';
import { ProductService } from '../../../../services/productService/product-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-update-product',
  imports: [FormGetProductById, ReactiveFormsModule],
  templateUrl: './form-update-product.html',
  styleUrl: './form-update-product.scss',
})
export class FormUpdateProduct {

  private readonly _productService = inject(ProductService);
  private readonly _formBuilder = inject(FormBuilder);

  productForm: FormGroup = this._formBuilder.group({  // formGroup for maping input form to a model.
    name: ['', { validators: [Validators.required] }],
    price: [10.0, { validators: [Validators.required, Validators.min(1.0)] }],
    id: [0],
  });

  productToUpdate: WritableSignal<Product | undefined> = signal(undefined);  // product selected from db.

  constructor(){

    //let mapProductSelectedToForm = (product: Product | undefined) => {  // in a lambda for not trigger effect.
    //  this.productForm.setValue({...product});  // apply productToUpdate into productForm.
    //};

    effect(() => {  // execute when productToUpdate change.
      const product: Product | undefined = this.productToUpdate() as any;

      if (product === undefined){
        //this.productForm.reset();
        return;
      }

      this.productForm.setValue({...product});  // apply productToUpdate into productForm.
      this.productToUpdate.set(undefined);
    });

  }

  update($event: SubmitEvent){
    $event.preventDefault();

    let productNullable: Product | undefined = this.productForm.value as any;

    console.log(productNullable);

    if (!productNullable || !productNullable?.id){
      return;
    }

    this._productService.update(productNullable).subscribe({
      next: (response) => {
        console.log(response);
        console.log('update successfully');
      },
      error: (error) => {
        console.error('update error');
      }
    });

  }

}
