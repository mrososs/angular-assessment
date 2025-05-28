import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { AddProductDialogComponent } from "../../components/add-product-dialog/add-product-dialog.component";

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, AddProductDialogComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {

}
