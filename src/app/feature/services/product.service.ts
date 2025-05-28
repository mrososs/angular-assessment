import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { delay, tap, catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = '/products';
  private _http = inject(HttpClient);
  private _products = signal<Product[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);
  products = computed(() => this._products());
  loading = computed(() => this._loading());
  error = computed(() => this._error());

  fetchProducts(): void {
    this._loading.set(true);
    this._error.set(null);

    this._http
      .get<Product[]>(this.productsUrl)
      .pipe(
        delay(1000), // simulate loading
        tap((data) => this._products.set(data)),
        catchError((err) => {
          this._error.set('Failed to fetch products');
          this._products.set([]);
          return of([]);
        }),
        tap(() => this._loading.set(false))
      )
      .subscribe();
  }
  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(this.productsUrl, product).pipe(
      tap((newProduct) => {
        this._products.update((current) => [...current, newProduct]);
      })
    );
  }
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this._http.put<Product>(url, product).pipe(
      tap((updatedProduct) => {
        this._products.update((current) =>
          current.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
        );
      })
    );
  }
  deleteProduct(id: number): Observable<void> {
    const url = `${this.productsUrl}/${id}`;
    return this._http.delete<void>(url).pipe(
      tap(() => {
        this._products.update((current) => current.filter((p) => p.id !== id));
      })
    );
  }
}
