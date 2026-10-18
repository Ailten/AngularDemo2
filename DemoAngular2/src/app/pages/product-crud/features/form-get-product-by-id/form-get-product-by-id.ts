import { Component, inject, model, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../../../services/productService/product-service';
import { Product } from '../../../../models/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-get-product-by-id',
  imports: [FormsModule],
  templateUrl: './form-get-product-by-id.html',
  styleUrl: './form-get-product-by-id.scss',
})
export class FormGetProductById {

  private readonly _productService = inject(ProductService);

  indexProductAsk = signal<number>(0);  // index product (link to input form).

  selectedProduct = model<Product | undefined>(undefined);  // the product selected after the form execution.

  submit($event: SubmitEvent){
    $event.preventDefault();

    console.log(this.indexProductAsk());

    this._productService.getById(this.indexProductAsk()).subscribe({
      next: (result) => {
        console.log(result);
        this.selectedProduct.set(result);
      },
      error: (error) => {
        console.log('error');
      }
    });

  }

}
