import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputsComponent } from '../../../shared/components/inputs/inputs.component';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../models/product.model';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-product-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputsComponent,
    DialogModule,
  ],
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.scss',
})
export class AddProductDialogComponent implements OnInit {
  fb = inject(FormBuilder);
  dialogRef = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.1)]],
    description: [''],
    category: [''],
    image: [''],
  });

  @Output() onSave = new EventEmitter<Product>();
  ngOnInit(): void {
    const data = this.config.data as Product | undefined;

    if (data) {
      this.product = data;
      this.productForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }

save() {
  if (this.productForm.invalid) return;

  const formValues = this.productForm.value;

  const newProduct: Product = {
    ...this.product,
    title: formValues.title!,
    price: formValues.price!,
    description: formValues.description!,
    category: formValues.category!,
    image: formValues.image!,
  };

  this.dialogRef.close(newProduct);
}
}
