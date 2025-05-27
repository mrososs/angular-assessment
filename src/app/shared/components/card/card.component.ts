import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
  @Input() actions: string[] = []; 

}
