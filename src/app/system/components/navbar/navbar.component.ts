import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() menuClicked = new EventEmitter<void>();
  userName = localStorage.getItem('username') || 'Guest';
  mobileNavOpen = false;
  toggleNavMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  toggleMenu() {
    this.menuClicked.emit();
  }
}
