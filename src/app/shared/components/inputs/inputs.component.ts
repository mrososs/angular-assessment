import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
  @Input() label: string = '';
  @Input() type: 'text' | 'file' | 'float-label' | 'select' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() options: string[] = [];

  @Output() valueChange = new EventEmitter<any>();
  onChangeFn: any = () => {};
  onTouchedFn: any = () => {};
  value: any = '';

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
    const value =
      input.type === 'file'
        ? (input as HTMLInputElement).files?.[0]
        : input.value;

    this.value = value;
    this.onChangeFn(value);
    this.valueChange.emit(value);
  }
}
