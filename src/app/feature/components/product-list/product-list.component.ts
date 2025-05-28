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
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CardComponent, TableModule, ButtonComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private _productsService = inject(ProductService);
  private route = inject(ActivatedRoute);

  private _dialogService = inject(DialogService);
  private router = inject(Router);
  viewMode = signal<'card' | 'table'>('card');

  dialogRef: DynamicDialogRef | undefined;
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
    this.route.queryParamMap.subscribe((params) => {
      const view = params.get('view');
      if (view === 'table') {
        this.viewMode.set('table');
      } else {
        this.viewMode.set('card');
      }
    });
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
        this.router.navigate(['/products/details', product.id]);

        break;
      case 'edit':
        this.dialogRef = this._dialogService.open(AddProductDialogComponent, {
          header: 'Edit Product',
          width: '500px',
          data: product,
        });

        this.dialogRef.onClose.subscribe((updatedProduct: Product) => {
          if (updatedProduct) {
            this._productsService.updateProduct(updatedProduct).subscribe();
          }
        });
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
  onGlobalFilter(event: Event, table: any) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }
}
