import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss',
})
export class CardPageComponent {
  showTextCardHtml = false;
  showImageCardHtml = false;
  showActionCardHtml = false;
}
