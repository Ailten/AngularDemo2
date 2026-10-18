import { Component, inject, linkedSignal } from '@angular/core';
import { ProductService } from '../../services/productService/product-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  private readonly productService = inject(ProductService);  // inject service.

  // method get all (from service) (! get the methode getAll, not the result list article !).
  private productGetAll = this.productService.getAll();

  products = linkedSignal({
    source: () => ({ products: this.productGetAll.value() }),  // source, signal lisen, for re-calcul it when it change.
    computation: ({ products }) => products,  // computation, function who get the new value, and return it.
  });

}
