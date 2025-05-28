import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../services/product.service';
import { AddProductDialogComponent } from '../../components/add-product-dialog/add-product-dialog.component';
import { Product } from '../../models/product.model';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ButtonModule, ButtonComponent],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss',
  providers: [DialogService],
})
export class ProductListPageComponent {
  private _productService = inject(ProductService);
  private dialogService = inject(DialogService);
  private dialogRef!: DynamicDialogRef;

  openDialog() {
    this.dialogRef = this.dialogService.open(AddProductDialogComponent, {
      header: 'Add Product',
      width: '450px',
    });

    this.dialogRef.onClose.subscribe((result: Product) => {
      if (result) {
        this._productService.addProduct(result).subscribe();
      }
    });
  }

 
}
