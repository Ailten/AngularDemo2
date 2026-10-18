import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormGetProductById } from '../form-get-product-by-id/form-get-product-by-id';
import { ProductService } from '../../../../services/productService/product-service';
import { Product } from '../../../../models/products';

@Component({
  selector: 'app-form-delete-product',
  imports: [FormGetProductById],
  templateUrl: './form-delete-product.html',
  styleUrl: './form-delete-product.scss',
})
export class FormDeleteProduct {

  private readonly _productService = inject(ProductService);

  productSelected: WritableSignal<Product | undefined> = signal<Product | undefined>(undefined);


  deleteProduct(){

    if(this.productSelected() === undefined)
      return;

    let idProduct = this.productSelected()?.id ?? 0;

    if(idProduct === 0)
      return;

    let confirmResponse = confirm(`are you sur you whant to delete product ?\n\nid: ${idProduct}\nname: ${this.productSelected()?.name}`);
    if(!confirmResponse)
      return;


    this._productService.delete(idProduct).subscribe({
      next: (result) => {
        console.log('delete with success.');
      },
      error: (error) => {
        console.error('delet error');
      }
    });

  }

}
