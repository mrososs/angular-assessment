import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
   @Input() label: string = '';
  @Input() type: 'text' | 'file' | 'float-label' | 'select' = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() options: string[] = []; 

  @Output() valueChange = new EventEmitter<any>();

    onChange(event: Event) {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
    const value = input.type === 'file' ? (input as HTMLInputElement).files?.[0] : input.value;
    this.valueChange.emit(value);
  }
}
