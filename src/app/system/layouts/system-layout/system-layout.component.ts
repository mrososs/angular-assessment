import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-system-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    
  ],
  templateUrl: './system-layout.component.html',
  styleUrl: './system-layout.component.scss',
})
export class SystemLayoutComponent {
  isSidebarOpen = signal(true);
  toggleSidebar() {
    this.isSidebarOpen.update((value) => !value);
  }
}
