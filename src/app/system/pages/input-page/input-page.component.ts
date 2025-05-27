import { Component } from '@angular/core';
import { InputsComponent } from '../../../shared/components/inputs/inputs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [InputsComponent, CommonModule],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss',
})
export class InputPageComponent {
  file: File | null = null;

  name: string = '';

  handleFileUpload(file: File) {
    this.file = file;
  }

  handleNameChange(value: string) {
    this.name = value;
  }
}
