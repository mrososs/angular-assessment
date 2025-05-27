import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAppOnlyNumbers]',
  standalone: true,
})
export class AppOnlyNumbersDirective {
  @Output() numberError = new EventEmitter<boolean>();

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = event.target.value;
    const cleaned = initialValue.replace(/[^0-9]*/g, '');

    event.target.value = cleaned;

    if (initialValue !== cleaned) {
      this.numberError.emit(true); // ← فيه حروف
    } else {
      this.numberError.emit(false); // ← سليم
    }
  }
}
