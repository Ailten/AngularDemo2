import { Component, signal, WritableSignal } from '@angular/core';
import { FormGetProductById } from '../form-get-product-by-id/form-get-product-by-id';
import { Product } from '../../../../models/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-form-read-product',
  imports: [FormGetProductById, CurrencyPipe],
  templateUrl: './form-read-product.html',
  styleUrl: './form-read-product.scss',
})
export class FormReadProduct {

  productSelected: WritableSignal<Product | undefined> = signal<Product | undefined>(undefined);

}
