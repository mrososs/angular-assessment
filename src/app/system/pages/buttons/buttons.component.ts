import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgFor, NgIf, ButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  variants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
  ];
  outlineVariants = [
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-dark',
  ];
  sizeVariants = ['sm', 'md', 'lg'];
  labelVariants = [
    'label-primary',
    'label-secondary',
    'label-success',
    'label-danger',
    'label-warning',
    'label-info',
    'label-dark',
  ];
  showBasicHtml = false;
  showOutlineHtml = false;
  showLabelHtml = false;
  showSizeHtml = false;
}
