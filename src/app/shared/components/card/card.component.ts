import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface CardAction {
  label: string;
  type?: 'primary' | 'danger' | 'success' | 'info';
  icon?: string;
  action: string;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor,NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
  @Input() actions: CardAction[] = [];
  @Output() actionClicked = new EventEmitter<string>();
    emitAction(action: string) {
    this.actionClicked.emit(action);
  }
}
