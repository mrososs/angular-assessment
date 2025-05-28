import { ButtonComponent } from './../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ButtonComponent,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() menuClicked = new EventEmitter<void>();
  private _storgeService = inject(StorageService);
  userName = this._storgeService.getItem<string>('username') || '';
  mobileNavOpen = false;
  toggleNavMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  toggleMenu() {
    this.menuClicked.emit();
  }
}
