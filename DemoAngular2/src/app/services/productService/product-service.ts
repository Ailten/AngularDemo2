import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // inject httpClient (ex: to make insert).
  private readonly $http = inject(HttpClient);


  // get all -> select all.
  getAll() {
    // call fake DB end-point select all.
    return httpResource<Product[]>(() => 'http://localhost:3000/products', {defaultValue: []});
  }

  insert(product: Product): Observable<Product> {
    return this.$http.post<Product>('http://localhost:3000/products', { ...product });
  }

  getById(idProduct: number): Observable<Product> {
    return this.$http.get<Product>(`http://localhost:3000/products/${idProduct}`);
  }

  delete(idProduct: number): Observable<Product> {
    return this.$http.delete<Product>(`http://localhost:3000/products/${idProduct}`);
  }

  update(product: Product): Observable<Product> {
    return this.$http.put<Product>(`http://localhost:3000/products/${product?.id}`, { ...product });
  }

}
