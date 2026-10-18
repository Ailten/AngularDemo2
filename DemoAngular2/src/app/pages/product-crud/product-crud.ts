import { Component } from '@angular/core';
import { FormCreateProduct } from './features/form-create-product/form-create-product';
import { FormReadProduct } from './features/form-read-product/form-read-product';
import { FormDeleteProduct } from './features/form-delete-product/form-delete-product';
import { FormUpdateProduct } from './features/form-update-product/form-update-product';

@Component({
  selector: 'app-product-crud',
  imports: [FormCreateProduct, FormReadProduct, FormDeleteProduct, FormDeleteProduct, FormUpdateProduct],
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.scss',
})
export class ProductCrud {



}
