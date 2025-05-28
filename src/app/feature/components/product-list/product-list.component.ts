import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private _productsService = inject(ProductService);
  products = computed(() => this._productsService.products());
  loading = computed(() => this._productsService.loading());
  currentPage = signal(1);
  itemsPerPage = 6;
  paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products().slice(start, end);
  });

  totalPages = computed(() =>
    Math.ceil(this.products().length / this.itemsPerPage)
  );

  @ViewChild('topRef') topRef!: ElementRef;
  ngOnInit(): void {
    this._productsService.fetchProducts();
  }
  scrollToTop() {
    this.topRef?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
      this.scrollToTop();
    }
  }
  handleCardAction(action: string, product: Product) {
    switch (action.toLowerCase()) {
      case 'delete':
        if (confirm(`Are you sure you want to delete "${product.title}"?`)) {
          this._productsService.deleteProduct(product.id).subscribe();
        }
        break;
      case 'view':
        console.log('Viewing:', product);
        break;
      case 'buy':
        console.log('Buying:', product);
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
      this.scrollToTop();
    }
  }
}
