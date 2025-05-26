import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: string = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() icon?: string;
  @Input() loading = false;
  @Input() block = false;
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();
}
